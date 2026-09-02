import { animateScrollTo, awaitScrollUnlocked, lockScroll } from "@/lib/scroll";
import type { MouseEvent } from "react";

const contentScrollOffset = 96;
const navigationTimeout = 3000;

let isNavigating = false;
let pendingHref: string | null = null;
let isAwaitingHighlight = false;
let unlockScroll: (() => void) | null = null;
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const endNavigation = () => {
    isNavigating = false;
    pendingHref = null;
    isAwaitingHighlight = false;

    if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    unlockScroll?.();
    unlockScroll = null;
};

const contentTop = () => {
    const content = document.getElementById("content");

    const top = content
        ? content.getBoundingClientRect().top + window.scrollY
        : window.innerHeight;

    return top - contentScrollOffset;
};

export const awaitHighlight = (pathname: string) => {
    if (pendingHref !== pathname) {
        return;
    }

    pendingHref = null;
    isAwaitingHighlight = true;
};

export const scrollToContent = () => {
    if (!isAwaitingHighlight) {
        return;
    }

    isAwaitingHighlight = false;
    animateScrollTo(contentTop()).then(endNavigation);
};

const abandonNavigation = () => {
    if (isAwaitingHighlight) {
        scrollToContent();
        return;
    }

    endNavigation();
};

export const isModifiedClick = (event: MouseEvent<HTMLAnchorElement>) =>
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey;

export const navigate = (href: string, pathname: string, push: () => void) => {
    if (isNavigating) {
        return;
    }

    isNavigating = true;
    unlockScroll = lockScroll();

    awaitScrollUnlocked().then(() => {
        const scrollsToContent = href !== "/";

        if (href === pathname) {
            animateScrollTo(scrollsToContent ? contentTop() : 0).then(
                endNavigation,
            );
            return;
        }

        animateScrollTo(0).then(() => {
            if (!scrollsToContent) {
                push();
                endNavigation();
                return;
            }

            pendingHref = href;
            timeoutId = setTimeout(abandonNavigation, navigationTimeout);
            push();
        });
    });
};

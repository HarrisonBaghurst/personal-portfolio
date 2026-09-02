"use client";

import { sections } from "@/constants/sections";
import { animateScrollTo, lockScroll } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type MouseEvent } from "react";

const transition = {
    type: "spring" as const,
    stiffness: 380,
    damping: 34,
    mass: 0.9,
};

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

const awaitHighlight = (pathname: string) => {
    if (pendingHref !== pathname) {
        return;
    }

    pendingHref = null;
    isAwaitingHighlight = true;
};

const scrollToContent = () => {
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

const navigate = (href: string, pathname: string, push: () => void) => {
    if (isNavigating) {
        return;
    }

    isNavigating = true;
    unlockScroll = lockScroll();

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
};

const HeroSections = () => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => awaitHighlight(pathname), [pathname]);

    const handleClick = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        event.preventDefault();
        navigate(href, pathname, () => router.push(href));
    };

    return (
        <div className="h-44 flex items-center">
            <ul className="flex flex-col items-start gap-4 text-4xl">
                {sections.map(({ label, href }) => {
                    const isActive = pathname === href;

                    return (
                        <motion.li
                            key={href}
                            layout
                            transition={transition}
                            className={cn(
                                "relative",
                                isActive ? "z-0 py-2.5" : "z-10",
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="section-highlight"
                                    transition={transition}
                                    onLayoutAnimationComplete={scrollToContent}
                                    className="absolute inset-y-0 -inset-x-6 rounded-full bg-[#9bbbdc]"
                                />
                            )}
                            <Link
                                href={href}
                                onClick={(event) => handleClick(event, href)}
                                className="relative block"
                            >
                                <motion.span
                                    layout="position"
                                    transition={transition}
                                    className={cn(
                                        "block whitespace-nowrap",
                                        !isActive && "underline",
                                    )}
                                >
                                    {label}
                                </motion.span>
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HeroSections;

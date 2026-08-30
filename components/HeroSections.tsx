"use client";

import { sections } from "@/constants/sections";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";

const transition = {
    type: "spring" as const,
    stiffness: 380,
    damping: 34,
    mass: 0.9,
};

const scrollKeys = new Set([
    " ",
    "PageUp",
    "PageDown",
    "Home",
    "End",
    "ArrowUp",
    "ArrowDown",
]);

const lockScroll = () => {
    const options = { passive: false } as const;

    const blockEvent = (event: Event) => {
        if (!event.cancelable) {
            return;
        }

        event.preventDefault();
    };

    const blockKey = (event: KeyboardEvent) => {
        if (!scrollKeys.has(event.key)) {
            return;
        }

        event.preventDefault();
    };

    window.addEventListener("wheel", blockEvent, options);
    window.addEventListener("touchmove", blockEvent, options);
    window.addEventListener("keydown", blockKey, options);

    return () => {
        window.removeEventListener("wheel", blockEvent);
        window.removeEventListener("touchmove", blockEvent);
        window.removeEventListener("keydown", blockKey);
    };
};

let isScrolling = false;

const scrollToTop = (onComplete: () => void) => {
    if (isScrolling) {
        return;
    }

    const from = window.scrollY;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
        window.scrollTo({ top: 0, behavior: "instant" });
        onComplete();
        return;
    }

    isScrolling = true;

    const unlockScroll = lockScroll();
    const duration = Math.min(900, Math.max(350, from * 0.6));
    const startTime = performance.now();

    const step = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);

        window.scrollTo({ top: from * (1 - eased), behavior: "instant" });

        if (progress < 1) {
            requestAnimationFrame(step);
            return;
        }

        isScrolling = false;
        unlockScroll();
        onComplete();
    };

    requestAnimationFrame(step);
};

const HeroSections = () => {
    const pathname = usePathname();
    const router = useRouter();

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
            event.altKey ||
            window.scrollY <= 0
        ) {
            return;
        }

        event.preventDefault();
        scrollToTop(() => router.push(href));
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

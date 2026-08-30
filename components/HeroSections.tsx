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

const scrollToTop = (onComplete: () => void) => {
    const from = window.scrollY;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
        window.scrollTo({ top: 0, behavior: "instant" });
        onComplete();
        return;
    }

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

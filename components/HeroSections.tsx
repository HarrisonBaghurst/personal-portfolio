"use client";

import { sections } from "@/constants/sections";
import {
    awaitHighlight,
    isModifiedClick,
    navigate,
    scrollToContent,
} from "@/lib/section-navigation";
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

const HeroSections = () => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => awaitHighlight(pathname), [pathname]);

    const handleClick = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (isModifiedClick(event)) {
            return;
        }

        event.preventDefault();
        navigate(href, pathname, () => router.push(href, { scroll: false }));
    };

    return (
        <div className="h-40 sm:h-44 flex items-center">
            <ul className="flex flex-col items-start gap-3 sm:gap-4 text-nav">
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
                                    className="absolute inset-y-0 -inset-x-4 sm:-inset-x-6 rounded-full bg-[#9bbbdc]"
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

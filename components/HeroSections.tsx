"use client";

import { sections } from "@/constants/sections";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const transition = {
    type: "spring" as const,
    stiffness: 380,
    damping: 34,
    mass: 0.9,
};

const HeroSections = () => {
    const pathname = usePathname();

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
                                isActive ? "z-0 py-2.5" : "z-10"
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="section-highlight"
                                    transition={transition}
                                    className="absolute inset-y-0 -inset-x-6 rounded-full bg-[#9bbbdc]"
                                />
                            )}
                            <Link href={href} className="relative block">
                                <motion.span
                                    layout="position"
                                    transition={transition}
                                    className="block whitespace-nowrap"
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

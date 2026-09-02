"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { sections } from "@/constants/sections";
import { isModifiedClick, navigate } from "@/lib/section-navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type MouseEvent } from "react";

const legal = [
    { label: "Terms of service", href: "/legal/terms-of-service" },
    { label: "Privacy policy", href: "/legal/privacy-policy" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (isModifiedClick(event)) {
            return;
        }

        event.preventDefault();
        setIsOpen(false);
        navigate(href, pathname, () => router.push(href, { scroll: false }));
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="fixed top-6 right-6 size-14 sm:top-16 sm:right-16 sm:size-20 z-40 rounded-full bg-foreground flex items-center justify-center cursor-pointer">
                <Image
                    src="/icons/menu.svg"
                    alt=""
                    width={48}
                    height={48}
                    className="size-8 sm:size-12"
                    aria-hidden
                    priority
                />
                <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent
                showCloseButton={false}
                className="bg-background p-6 sm:p-16 gap-0 data-[side=right]:w-4/5 data-[side=right]:border-l-0 data-[side=right]:sm:max-w-md"
            >
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetClose className="absolute top-6 right-6 size-14 sm:top-16 sm:right-16 sm:size-20 rounded-full bg-foreground flex items-center justify-center cursor-pointer">
                    <X
                        className="size-8 sm:size-12 text-background"
                        strokeWidth={2}
                        aria-hidden
                    />
                    <span className="sr-only">Close navigation</span>
                </SheetClose>
                <nav className="mt-28 sm:mt-44 flex flex-col items-start gap-2 text-nav">
                    {sections.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={(event) => handleClick(event, href)}
                            className={cn(
                                "rounded-full px-4 sm:px-6 py-2.5 whitespace-nowrap cursor-pointer",
                                pathname === href
                                    ? "bg-[#9bbbdc]"
                                    : "underline",
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto flex flex-col items-start gap-1 px-4 sm:px-6 text-meta">
                    {legal.map(({ label, href }) => (
                        <SheetClose key={href} asChild>
                            <Link
                                href={href}
                                className="cursor-pointer hover:text-foreground"
                            >
                                {label}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Navbar;

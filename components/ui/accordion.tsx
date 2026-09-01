"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

function Accordion({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            className={cn("flex w-full flex-col", className)}
            {...props}
        />
    );
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("not-first:pt-6", className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "group/accordion-trigger relative flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-sm border border-transparent py-5 text-left text-3xl font-poppins-bold text-foreground transition-all outline-none not-has-[:is(h1,h2,h3,h4)]:hover:underline hover:[&_:is(h1,h2,h3,h4)]:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-foreground/50 mt-8",
                    className,
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon
                    data-slot="accordion-trigger-icon"
                    className="pointer-events-none mt-1 shrink-0 transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:hidden"
                />
                <ChevronUpIcon
                    data-slot="accordion-trigger-icon"
                    className="pointer-events-none mt-1 hidden shrink-0 transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:inline"
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="overflow-hidden text-lg text-foreground/75 data-open:animate-accordion-down data-closed:animate-accordion-up"
            {...props}
        >
            <div
                className={cn(
                    "flex h-(--radix-accordion-content-height) flex-col gap-4 pt-0 pb-6 [&_a]:cursor-pointer [&_a]:text-[#4285F4] [&_a]:underline",
                    className,
                )}
            >
                {children}
            </div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

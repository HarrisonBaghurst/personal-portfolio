import { ChevronDownIcon } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import TechCard from "@/components/web-development/TechCard";
import techStack from "@/data/tech-stack.json";

const FEATURED_COUNT = 4;

const featured = techStack.slice(0, FEATURED_COUNT);
const remaining = techStack.slice(FEATURED_COUNT);
const peek = remaining.slice(0, FEATURED_COUNT);

const TechStack = () => {
    return (
        <Collapsible className="group flex flex-col">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
                {featured.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </div>
            <div
                inert
                className="pointer-events-none mt-8 grid h-16 grid-cols-2 gap-8 overflow-hidden mask-b-from-30% lg:mt-12 lg:grid-cols-4 lg:gap-12 group-data-[state=open]:hidden"
            >
                {peek.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </div>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <div className="grid grid-cols-2 gap-8 pt-8 lg:grid-cols-4 lg:gap-12 lg:pt-12">
                    {remaining.map((tech) => (
                        <TechCard key={tech.name} {...tech} />
                    ))}
                </div>
            </CollapsibleContent>
            <CollapsibleTrigger className="mt-8 flex cursor-pointer items-center justify-center gap-2 rounded-sm text-base text-foreground/75 transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
                <span className="group-data-[state=open]:hidden">
                    Show more
                </span>
                <span className="hidden group-data-[state=open]:inline">
                    Show less
                </span>
                <ChevronDownIcon className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
        </Collapsible>
    );
};

export default TechStack;

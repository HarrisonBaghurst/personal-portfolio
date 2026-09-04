import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="page-gutter flex-1 min-h-svh py-28 sm:py-32 flex flex-col items-center justify-center gap-8 text-center">
            <div className="flex flex-col gap-4">
                <p className="text-meta tracking-wide text-foreground/50">
                    404 - Page not found
                </p>
                <h1 className="text-title">Are you lost?</h1>
                <p className="text-body">
                    Return home to find out more about me.
                </p>
            </div>
            <Button asChild className="text-lg rounded-full">
                <Link href="/">Back to home</Link>
            </Button>
        </div>
    );
}

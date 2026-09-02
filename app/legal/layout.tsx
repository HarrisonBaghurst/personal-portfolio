import Footer from "@/components/Footer";
import Link from "next/link";

export default function LegalLayout({ children }: LayoutProps<"/legal">) {
    return (
        <>
            <div className="page-gutter pt-24 sm:pt-32 flex flex-col gap-12 sm:gap-16">
                <Link
                    href="/"
                    className="w-fit text-foreground/75 hover:text-foreground"
                >
                    &larr; Back to site
                </Link>
                {children}
            </div>
            <Footer />
        </>
    );
}

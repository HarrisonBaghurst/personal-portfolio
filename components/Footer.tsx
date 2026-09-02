import Link from "next/link";

const Footer = () => {
    return (
        <div className="page-gutter min-h-[25svh] flex items-end pb-5">
            <div className="text-meta w-full flex flex-col gap-2 sm:flex-row sm:justify-between">
                <p>© Harrison Baghurst Digital | 2026</p>
                <div className="flex gap-6 sm:gap-10">
                    <Link
                        href="/legal/terms-of-service"
                        className="hover:text-foreground"
                    >
                        Terms of service
                    </Link>
                    <Link
                        href="/legal/privacy-policy"
                        className="hover:text-foreground"
                    >
                        Privacy policy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

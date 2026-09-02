import Link from "next/link";

const Footer = () => {
    return (
        <div className="mx-[25%] relative h-[25dvh]">
            <div className="absolute left-0 bottom-5 text-meta w-full flex justify-between">
                <p>© Harrison Baghurst Digital | 2026</p>
                <div className="flex gap-10">
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

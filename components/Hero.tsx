import HeroSections from "@/components/HeroSections";

const Hero = () => {
    return (
        <div className="w-full min-h-svh py-28 sm:py-32 flex flex-col items-center justify-center relative">
            <div className="page-gutter flex justify-center">
                <div className="w-fit flex flex-col gap-10 sm:gap-16">
                    <div className="flex flex-col gap-4">
                        <p className="text-lead">I&apos;m</p>
                        <h1 className="text-emphasis text-hero">
                            Harrison Baghurst.
                        </h1>
                    </div>
                    <HeroSections />
                </div>
            </div>
            <div className="absolute top-8 left-6 sm:top-20 sm:left-1/2 sm:-translate-x-1/2 text-left sm:text-center flex flex-col gap-1">
                <p className="text-base sm:text-xl">Durham, England</p>
                <p className="text-meta sm:text-base text-foreground/40 wrap-break-word">
                    {process.env.CONTACT_EMAIL}
                </p>
            </div>
        </div>
    );
};

export default Hero;

import HeroSections from "@/components/HeroSections";

const Hero = () => {
    return (
        <div className="w-dvw h-dvh flex flex-col items-center justify-center relative">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <p className="text-5xl">I&apos;m</p>
                    <h1 className="text-emphasis text-8xl">
                        Harrison Baghurst.
                    </h1>
                </div>
                <HeroSections />
            </div>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center flex flex-col gap-1">
                <p className="text-xl">Durham, England</p>
                <p className="text-foreground/40">
                    {process.env.CONTACT_EMAIL}
                </p>
            </div>
        </div>
    );
};

export default Hero;

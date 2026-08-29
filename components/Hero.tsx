import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
    const cards = [
        {
            title: "Chalkie Chalkie",
            style: "rotate-4 -translate-x-12 translate-y-2",
            image: "/imgs/ChalkieChalkie3.png",
        },
        {
            title: "Soft Blocked",
            style: "-rotate-4 -translate-x-4 -translate-y-2",
            image: "/imgs/SoftBlocked2.jpeg",
        },
        {
            title: "Cyclic integral",
            style: "rotate-2 translate-x-4 translate-y-2",
            image: "/imgs/Tutoring.jpeg",
        },
        {
            title: "London photo",
            style: "-rotate-6 translate-x-12 -translate-y-2",
            image: "/imgs/London.jpg",
        },
    ];

    return (
        <div className="w-dvw h-dvh flex flex-col items-center justify-center relative">
            <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-4">
                    <p className="text-5xl">I'm</p>
                    <h1 className="text-8xl font-poppins-bold">
                        Harrison Baghurst.
                    </h1>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    {cards.map(({ title, style, image }) => (
                        <div
                            key={title}
                            className={cn(
                                "relative bg-foreground aspect-square overflow-hidden rounded-sm",
                                `${style}`,
                            )}
                        >
                            {image && (
                                <Image src={image} alt={title} fill priority />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex text-4xl justify-evenly">
                    <Button>Web Developer</Button>
                    <Button variant={"outline"}>Maths Tutor</Button>
                    <Button variant={"outline"}>Photographer</Button>
                </div>
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

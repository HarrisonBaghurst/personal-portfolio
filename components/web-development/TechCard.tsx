import Image from "next/image";

type TechCardProps = {
    name: string;
    icon: string;
    description: string;
    href: string;
    linkText: string;
};

const TechCard = ({
    name,
    icon,
    description,
    href,
    linkText,
}: TechCardProps) => {
    return (
        <div className="flex flex-col gap-4">
            <Image
                src={icon}
                alt={`${name} icon`}
                width={64}
                height={64}
                className="size-16"
            />
            <div>
                <p className="font-poppins-bold text-foreground">{name}</p>
                <p className="text-sm">{description}</p>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer underline text-[#4285F4] text-sm"
                >
                    {linkText}
                </a>
            </div>
        </div>
    );
};

export default TechCard;

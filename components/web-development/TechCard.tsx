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
        <div className="flex min-w-0 flex-col gap-4">
            <Image
                src={icon}
                alt={`${name} icon`}
                width={64}
                height={64}
                className="size-16"
            />
            <div>
                <p className="text-emphasis">{name}</p>
                <p className="text-meta">{description}</p>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-sm wrap-break-word"
                >
                    {linkText}
                </a>
            </div>
        </div>
    );
};

export default TechCard;

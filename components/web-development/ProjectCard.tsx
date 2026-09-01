import Image from "next/image";

type ProjectCardProps = {
    name: string;
    image: string;
    width: number;
    height: number;
    alt: string;
    description: string;
    href: string;
    linkText: string;
};

const ProjectCard = ({
    name,
    image,
    width,
    height,
    alt,
    description,
    href,
    linkText,
}: ProjectCardProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative w-full rounded-md overflow-hidden">
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="50vw"
                    className="h-auto w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="font-poppins-bold text-foreground">{name}</h4>
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

export default ProjectCard;

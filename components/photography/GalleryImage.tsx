import Image from "next/image";
import type { CSSProperties } from "react";

export type GalleryPhoto = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

type GalleryImageProps = GalleryPhoto & {
    grow: number;
    sizes: string;
};

const GalleryImage = ({
    src,
    width,
    height,
    alt,
    grow,
    sizes,
}: GalleryImageProps) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes={sizes}
            style={{ "--grow": grow } as CSSProperties}
            className="h-auto w-full min-w-0 rounded-sm sm:basis-0 sm:grow-(--grow)"
        />
    );
};

export default GalleryImage;

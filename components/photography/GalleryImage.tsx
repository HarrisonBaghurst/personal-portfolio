import Image from "next/image";

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
            style={{ flexGrow: grow, flexBasis: 0 }}
            className="h-auto w-full min-w-0 rounded-sm"
        />
    );
};

export default GalleryImage;

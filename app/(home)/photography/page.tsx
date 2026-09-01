import GalleryImage from "@/components/photography/GalleryImage";
import gallery from "@/data/photography-gallery.json";

const page = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8 text-lg text-foreground/75">
                <h2 className="text-6xl font-poppins-bold text-foreground">
                    Photography
                </h2>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I recently took up photography as a creative outlet and
                        am still learning everything to do with the medium. I am
                        an amateur, and would happily receive constructive
                        feedback if you believe you have something useful to
                        add. If you do like some of my photographs and would
                        like a better quality copy, feel free to contact me, I
                        will most likely be happy to share a full quality copy
                        for a small charge.
                    </p>
                    <p>
                        All photographs showcased in my gallery are taken on a
                        Sony ZV-E10.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {gallery.map((row, index) => {
                    const totalRatio = row.reduce(
                        (total, photo) => total + photo.width / photo.height,
                        0,
                    );

                    return (
                        <div key={index} className="flex gap-4">
                            {row.map((photo) => {
                                const grow =
                                    photo.width / photo.height / totalRatio;

                                return (
                                    <GalleryImage
                                        key={photo.src}
                                        {...photo}
                                        grow={grow}
                                        sizes={`${Math.round(50 * grow)}vw`}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default page;

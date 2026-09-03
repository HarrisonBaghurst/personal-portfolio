import Image from "next/image";

const UserIcon = () => {
    return (
        <div className="fixed overflow-hidden bottom-6 right-6 size-14 sm:bottom-16 sm:right-16 sm:size-20 rounded-full bg-foreground">
            <Image
                src={
                    "https://vvz9axceq1op6mal.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2021.11.08.jpeg"
                }
                alt="Harrison Baghurst"
                fill
            />
        </div>
    );
};

export default UserIcon;

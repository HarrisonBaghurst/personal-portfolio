import Image from "next/image";

const Navbar = () => {
    return (
        <div className="fixed top-16 right-16">
            <div className="bg-foreground rounded-full w-20 h-20 flex items-center justify-center">
                <Image
                    src="/icons/menu.svg"
                    alt="Menu"
                    width={48}
                    height={48}
                />
            </div>
        </div>
    );
};

export default Navbar;

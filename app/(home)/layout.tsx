import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function HomeLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Hero />
            <div id="content" className="mx-[25%]">
                {children}
            </div>
            <Footer />
        </>
    );
}

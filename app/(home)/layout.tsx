import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function HomeLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Hero />
            <div id="content" className="page-gutter">
                {children}
                <Contact />
            </div>
            <Footer />
        </>
    );
}

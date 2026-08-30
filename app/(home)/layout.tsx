import Hero from "@/components/Hero";

export default function HomeLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Hero />
            {children}
        </>
    );
}

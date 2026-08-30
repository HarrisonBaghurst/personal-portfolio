import Hero from "@/components/Hero";

export default function HomeLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Hero />
            <div className="mx-[25%]">{children}</div>
        </>
    );
}

import type { ReactNode } from "react";

const Section = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 pt-8">
                <h3 className="text-3xl font-poppins-bold text-foreground">
                    {title}
                </h3>
                <hr className="border-foreground/15" />
            </div>
            {children}
        </section>
    );
};

export default Section;

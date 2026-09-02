import Projects from "@/components/web-development/Projects";
import TechStack from "@/components/web-development/TechStack";

const page = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8 text-body">
                <h2 className="text-title">Web development</h2>
                <div className="flex flex-col gap-4 text-flow">
                    <p>
                        I am a final year Computer Science student and will be
                        progressing into software engineering once my degree is
                        completed. While I do have more projects and further
                        experience, the vast majority of my expertise is within
                        web-development.
                    </p>
                    <p>
                        I have experience working throughout the full stack, as
                        well as integrations with supporting services for
                        authentication, database management, file storage,
                        content management and much more.
                    </p>
                    <p>
                        I am drawn to minimalism with clean, cohesive styling
                        and strong user experience. Additionally, I focus on
                        maintainability and responsive design throughout my
                        projects.
                    </p>
                </div>
                <div className="flex flex-col gap-4 pt-8">
                    <h3 className="text-heading">Tech stack</h3>
                    <hr className="border-foreground/15" />
                </div>
                <TechStack />
                <div className="flex flex-col gap-4 pt-8">
                    <h3 className="text-heading">Featured projects</h3>
                    <hr className="border-foreground/15" />
                </div>
                <Projects />
            </div>
        </div>
    );
};

export default page;

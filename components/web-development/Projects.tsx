import ProjectCard from "@/components/web-development/ProjectCard";
import projects from "@/data/projects.json";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 gap-10 pt-4 text-flow sm:grid-cols-2 sm:gap-12">
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
};

export default Projects;

import ProjectCard from "@/components/web-development/ProjectCard";
import projects from "@/data/projects.json";

const Projects = () => {
    return (
        <div className="grid grid-cols-2 gap-12 pt-4 text-justify">
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
};

export default Projects;

import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function ProjectsGrid() {
    return (
        <div className="project-grid-content">
            <div className="grid-d-three-cols">

                {projects.map((project) => (<ProjectCard key={project.id} {...project} />))}
                
            </div>
        </div>
    )
}

export default ProjectsGrid;
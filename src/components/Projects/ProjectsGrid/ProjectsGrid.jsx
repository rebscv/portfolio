import projects from "../../../data/projects";
import ProjectCard from "../../../components/Projects/ProjectCard/ProjectCard";

import "./ProjectsGrid.css";

function ProjectsGrid() {
    return (
        <div className="project-grid-content">
            <div className="project-grid grid-d-two-cols">

                {projects.map((project) => (<ProjectCard key={project.id} project={project} />))}
                
            </div>
        </div>
    )
}

export default ProjectsGrid;
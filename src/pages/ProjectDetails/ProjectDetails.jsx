import { useParams } from "react-router-dom";
import projects from "../../data/projects";

function ProjectDetails() {
 
    const { slug } = useParams();

    const project = projects.find (
        (project) => project.slug === slug
    );

    if (!project) {
        return <h1>Project not found.</h1>
    }

    return (
        <section className="project-detail-content">
            <div className="std-wrapper">

                <h1>{project.title}</h1>
                <p>{project.subtitle}</p>
                <img src={project.heroImage} alt={project.title} />
                <p>{project.overview}</p>
                
            </div>
        </section>
    );

}

export default ProjectDetails;
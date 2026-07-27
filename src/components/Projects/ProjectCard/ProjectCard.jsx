import { Link } from "react-router-dom";

import "./ProjectCard.css";

function ProjectCard({ project }) {

    const { slug, title, subtitle, thumbnail, summary, }  = project;

    const technologies = summary?.technologies ?? [];

    return (
        <article className="project-card">

            <Link to={`/projects/${slug}`}></Link>

            <img src={thumbnail} alt={title} />

            <div className="project-card-content grid">
                <Link to={`/projects/${slug}`}>View Project</Link>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div>
                    {technologies.map((tech) => (<span key={tech}>{tech}</span>))}
                </div>
                
            </div>                

        </article>
    )
}

export default ProjectCard;
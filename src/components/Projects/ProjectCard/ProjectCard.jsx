import { Link } from "react-router-dom";

import "./ProjectCard.css";

function ProjectCard({ slug, title, subtitle, thumbnail, technologies, }) {
    return (
        <article className="project-card">

            <Link to={`/projects/${slug}`}></Link>

            <img src={thumbnail} alt={title} />

            <div className="project-card-content grid" style={{ display: "none" }}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div>
                    {technologies.map((tech) => (<span key={tech}>{tech}</span>))}
                </div>
                <Link to={`/projects/${slug}`} className="btn btn-primary">View Project</Link>
            </div>                

        </article>
    )
}

export default ProjectCard;
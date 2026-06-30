import { Link } from "react-router-dom";

function ProjectCard({ slug, title, subtitle, thumbnail, technologies, }) {
    return (
        <article className="project-card">

            <img src={thumbnail} alt={title} />

            <div className="project-card-content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div>
                    {technologies.map((tech) => (<span key={tech}>{tech}</span>))}
                </div>
                <Link to={`/projects/${slug}`}>View Project</Link>
            </div>                

        </article>
    )
}

export default ProjectCard;
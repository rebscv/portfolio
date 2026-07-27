import { Link } from "react-router-dom";

import "./FeaturedProjectCard.css";

function ProjectCard({ project }) {

    const { slug, title, featureTitle, logo , thumbnail, summary }  = project;

    const technologies = summary?.technologies ?? [];

    return (
        <article className="feature-project-card">

            <Link to={`/projects/${slug}`}></Link>

            <div className="feature-project-img-overlay"></div>
            <img className="feature-project-img" src={thumbnail} alt={title} />

            <div className="feature-project-content dark-bg">

                <div className="feature-project-header">

                    {logo && <img src={logo} alt={title} />}
                    <h3>{featureTitle}</h3>
                    

                </div>
                
                <div className="feature-project-card-title">
                    <h3>{featureTitle}</h3>
                </div>

            </div>                

        </article>
    )
}

export default ProjectCard;
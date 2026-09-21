import { Link } from "react-router-dom";

import "./FeaturedProjectCard.css";

function ProjectCard({ project }) {

    const { slug, title, featureTitle, featureTagline, logo, featuredImg, featuredImgAlt, summary }  = project;

    const technologies = summary?.technologies ?? [];

    return (
        <article className="feature-project-card">

            <Link to={`/projects/${slug}`}></Link>

            <div className="feature-project-img-overlay"></div>
            <img className="feature-project-img" loading="lazy" src={featuredImg} width="1024" height="1024" alt={featuredImgAlt} />

            <div className="feature-project-content dark-bg">

                <div className="feature-project-header">

                    {logo && <img loading="lazy" src={logo} alt={title} width="96" height="96" />}
                    <div>{featureTagline}</div>
                    

                </div>
                
                <div className="feature-project-card-title">                    
                    <h3>{featureTitle}</h3><svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg>                    
                </div>

            </div>                

        </article>
    )
}

export default ProjectCard;
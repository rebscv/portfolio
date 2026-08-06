import { Link } from "react-router-dom";

import "./ProjectCard.css";

function ProjectCard({ project }) {

    const { slug, title, subtitle, thumbnail, summary, }  = project;

    const technologies = summary?.technologies ?? [];

    return (
        <article className="project-card">

            <Link to={`/projects/${slug}`}></Link>



            

   

            <div className="project-card-block">

                <div className="project-card-img-container">

                    <div className="project-card-img">
                        <img src={thumbnail} alt={title} />                    
                    </div>      

                    <div className="project-card-img-shadow"></div>

                </div>


                <div className="project-card-content">

                    <div className="project-card-txt">
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>

                    <div className="project-card-cta">

                    </div>

                </div>


            </div>



        </article>
    )
}

export default ProjectCard;
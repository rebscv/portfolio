import { Link } from "react-router-dom";
import FadeIn from "../../../animations/FadeIn";

import "./ProjectNavigation.css";
import { section } from "framer-motion/client";

function ProjectNavigation({ previousProject, nextProject }) {

    return (

        <section className="project-navigation">
            <div className="std-wrapper">

                
                <FadeIn direction="up" duration={1} delay={0.3}>
                    <nav className="project-navigation-flex">                    
                        
                        {previousProject ? (

                            <Link className="project-navigation-previous" to={`/projects/${previousProject.slug}`}>
                                <div>
                                    <span>Previous Project</span>
                                    <div className="project-navigation-title">{previousProject.title}</div>
                                </div>

                                <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg>
                            </Link>

                        ) : (<div></div>)}
                            
                        
                        
                        {nextProject ? ( 

                            <Link to={`/projects/${nextProject.slug}`}>
                                <div>
                                    <span>Next Project</span>
                                    <div className="project-navigation-title">{nextProject.title}</div>
                                </div>

                                <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg>                        
                            </Link>
                        
                        ) : (
                        <Link to="/projects" className="project-navigation-return">
                                <div>
                                    <span>Return to</span>
                                    <div className="project-navigation-title">All Projects</div>
                                </div>
                                <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg>      
                            </Link>
                        )}

                    </nav>
                </FadeIn>


            </div>
        </section>



    );

}

export default ProjectNavigation;
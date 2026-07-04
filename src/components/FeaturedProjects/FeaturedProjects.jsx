import "./FeaturedProjects.css";

import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

function FeaturedProjects () {

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="featured-projects dark-bg black-bg">
            <div className="lrg-wrapper">
                
                <h2>Featured Projects</h2>

                <div className="grid-d-three-cols">
                    {featuredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            slug={project.slug}
                            title={project.title}
                            subtitle={project.subtitle}
                            thumbnail={project.thumbnail}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default FeaturedProjects;
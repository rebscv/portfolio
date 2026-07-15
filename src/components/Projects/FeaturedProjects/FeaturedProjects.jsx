import "./FeaturedProjects.css";

import projects from "../../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

function FeaturedProjects () {

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="featured-projects black-bg">
            <div className="lrg-wrapper">

                <div className="featured-projects-grid grid-d-four-cols">
                    {featuredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            slug={project.slug}
                            title={project.title}
                            subtitle={project.subtitle}
                            thumbnail={project.thumbnail}
                            summary={project.summary}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default FeaturedProjects;
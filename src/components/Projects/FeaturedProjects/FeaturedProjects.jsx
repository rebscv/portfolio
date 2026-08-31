import FadeIn from "../../../animations/FadeIn";
import "./FeaturedProjects.css";

import projects from "../../../data/projects";
import FeaturedProjectCard from "../FeaturedProjects/FeaturedProjectCard";

function FeaturedProjects () {

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="featured-projects black-bg">
            <div className="lrg-wrapper">

                <h2 className="title-eyebrow">Jump to a Project</h2>

                <div className="featured-projects-grid grid-d-four-cols grid-t-two-cols">
                    {featuredProjects.map((project, index) => (

                        <FadeIn key={project.id} delay={index * 0.25}>
                            <FeaturedProjectCard key={project.id} project={project} slug={project.slug} title={project.title} subtitle={project.subtitle} thumbnail={project.thumbnail} summary={project.summary}/>
                        </FadeIn>

                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default FeaturedProjects;
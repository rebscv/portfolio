import { useEffect } from "react";

import PageHero from "../../components/Page/PageHero";
import ProjectsGrid from "../../components/Projects/ProjectsGrid/ProjectsGrid";

import heroImg          from "../../assets/projects/projects-hero.webp" ;
import heroImgDesktop   from "../../assets/projects/projects-hero-1920x810.webp" ;
import heroImgLaptop    from "../../assets/projects/projects-hero-1440x600.webp" ;
import heroImgTablet    from "../../assets/projects/projects-hero-1024x432.webp" ;
import heroImgMobile    from "../../assets/projects/projects-hero-768x432.webp" ;
import "./Projects.css";


function Projects() {

    useEffect(() => { 

        document.title = `Projects - Reuven Vergara`;
        const description = document.querySelector(`meta[name="description"]`);        
        if (description) { description.setAttribute(
            "content", "Explore a selection of projects from my career as a Web Developer, with a focus on WordPress, custom template development and responsive design."
        ); }

        return () => {
            document.title = "Reuven Vergara - Front End Developer";
            if (description) { description.setAttribute("content",  "Portfolio of Reuven Vergara, a Front End Developer specialising in React, JavaScript, HTML, CSS and WordPress."); }
        };
        
    }, []);

    return (

        <div className="projects-page">

            <PageHero image={heroImg} imageMobile={heroImgMobile} imageTablet={heroImgTablet} imageLaptop={heroImgLaptop} imageDesktop={heroImgDesktop} title="Selected Work" eyebrow="Explore"
                text={[
                    "Explore a selection of projects from my career as a Web Developer, with a focus on WordPress, custom template development and responsive design.",
                    "I’m also expanding my skills in React through personal projects, including a recreation of a dealership website built from the ground up. Alongside web development, you’ll find a selection of digital design and creative work from my previous experience."
                ]}
            />

            <section className="projects-content">
                <div className="lrg-wrapper">

                    <ProjectsGrid />

                </div>
            </section>

            <div className="projects-page-bg"></div>

        </div>
        
    );

}

export default Projects;
import PageHero from "../../components/Page/PageHero";
import ProjectsGrid from "../../components/Projects/ProjectsGrid/ProjectsGrid";


import heroImg from "../../assets/projects/projects-hero.webp" ;
import "./Projects.css";


function Projects() {


    return (

        <div className="projects-page">

            <PageHero 
                image={heroImg}
                title="Selected Work"
                eyebrow="Explore"
                text="Explore a selection of projects from my career as a Web Developer, with a focus on WordPress, custom template development and responsive design. I’m also expanding my skills in React through personal projects, including a recreation of a dealership website built from the ground up. Alongside web development, you’ll find a selection of digital design and creative work from my previous experience."
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
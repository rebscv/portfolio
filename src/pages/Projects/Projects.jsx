

import PageHero from "../../components/Page/PageHero";
import ProjectsGrid from "../../components/Projects/ProjectsGrid/ProjectsGrid";


import heroImg from "../../assets/projects/projects-hero.webp" ;
import "./Projects.css";


function Projects() {


    return (

        <div className="projects-page">


            <PageHero
                title="Selected Work"
                eyebrow="Explore"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt neque suscipit tincidunt euismod. Cras congue pharetra arcu non rutrum. Praesent ac magna rutrum, consectetur lacus sed, eleifend tellus. Vestibulum at varius ligula. Sed ultricies lacinia nisl id vestibulum. Vivamus gravida mi vel erat commodo lobortis."
                image={heroImg}
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
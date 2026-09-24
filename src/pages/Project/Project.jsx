import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import projects from "../../data/projects";
import componentMap from "../../components/Projects/componentMap";
import ProjectNavigation from "../../components/Projects/ProjectNavigation/ProjectNavigation";
import "./project.css";

function Project() {
 
    const { slug } = useParams();
    const projectIndex = projects.findIndex ( (project) => project.slug === slug );
    const project = projects[projectIndex];

    useEffect(() => { 

        window.scrollTo({ top: 0, behavior: "instant"});

        if (project) {
            document.title = `${project.title} - Reuven Vergara`;

            const description = document.querySelector(`meta[name="description"]`);
            if (description) { description.setAttribute("content", project.overview); }

            const ogTitle = document.querySelector( 'meta[property="og:title"]' );
            if (ogTitle) { ogTitle.setAttribute( "content", `${project.title} — Reuven Vergara` ); }

            const ogDescription = document.querySelector( 'meta[property="og:description"]' );
            if (ogDescription) { ogDescription.setAttribute( "content", project.overview ); }

            const ogUrl = document.querySelector( 'meta[property="og:url"]' );
            if (ogUrl) { ogUrl.setAttribute( "content", `https://www.reuvenvergara.com/projects/${project.slug}` ); }

            const ogImage = document.querySelector( 'meta[property="og:image"]' );
            if (ogImage) { ogImage.setAttribute( "content", new URL(project.ogImage,window.location.origin).href ); }    
        }

        return () => {
            document.title = "Reuven Vergara - Front End Developer"
            const description = document.querySelector(`meta[name="description"]`);
            if (description) { description.setAttribute("content",  "Portfolio of Reuven Vergara, a Front End Developer specialising in React, JavaScript, HTML, CSS and WordPress."); }
        };

    }, [slug, project]);

    if (!project) {
        return <section className="project-not-found content dark-bg blue-gradiant-top-bg">
            <div className="sml-wrapper t-center dark-bg">
                <h1>Project not found</h1>
                <p>Sorry, this project couldn't be found. Please return to all projects.</p>
                <div>
                    <Link to="/projects" className="btn btn-outline">All Projects <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link>
                </div>
            </div>            
        </section>
        }

    const previousProject = projects[projectIndex - 1];
    const nextProject = projects[projectIndex + 1];

    return (
        
        <>
            <AnimatePresence mode="wait">
                <motion.div key={slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>

                    {project.sections.map((section, index) => {
                        const Component = componentMap[section.type]; if (!Component) return null; return ( <Component key={index} {...project[section.data]} /> );
                    })}

                </motion.div>
            </AnimatePresence>

            <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
            
        </>        
        
    );

}

export default Project;
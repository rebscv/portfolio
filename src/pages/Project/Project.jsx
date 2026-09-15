import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import projects from "../../data/projects";
import componentMap from "../../components/Projects/componentMap";
import ProjectNavigation from "../../components/Projects/ProjectNavigation/ProjectNavigation";

function Project() {
 
    const { slug } = useParams();
    const projectIndex = projects.findIndex ( (project) => project.slug === slug );
    const project = projects[projectIndex];

    useEffect(() => {window.scrollTo({ top: 0, behavior: "instant"}); }, [slug]);

    if (!project) { return <h1>Project not found.</h1> }

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
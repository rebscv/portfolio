import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import componentMap from "../../components/Projects/componentMap";
import ProjectNavigation from "../../components/Projects/ProjectNavigation/ProjectNavigation";

function Project() {
 
    const { slug } = useParams();

    const projectIndex = projects.findIndex ( (project) => project.slug === slug );

    const project = projects[projectIndex];

    if (!project) { return <h1>Project not found.</h1> }

    const previousProject = projects[projectIndex - 1];
    const nextProject = projects[projectIndex + 1];

    return (
        
        <>
            {project.sections.map((section, index) => {
                const Component = componentMap[section.type]; if (!Component) return null; return ( <Component key={index} {...project[section.data]} /> );
            })}
            <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
        </>        
        
    );

}

export default Project;
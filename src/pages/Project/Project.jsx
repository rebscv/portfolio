import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import componentMap from "../../components/Projects/componentMap";

function Project() {
 
    const { slug } = useParams();

    const project = projects.find (
        (project) => project.slug === slug
    );

    if (!project) {
        return <h1>Project not found.</h1>
    }

    return (
        
        <>
            {project.sections.map((section, index) => {
                const Component = componentMap[section.type]; if (!Component) return null;
                return ( <Component key={index} {...project[section.data]} /> );
            })}
        </>
        
    );

}

export default Project;
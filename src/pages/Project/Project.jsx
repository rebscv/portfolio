import { useParams } from "react-router-dom";

function Project() {
    
    const { slug } = useParams();

    return (
        <h1>{slug}</h1>
    );

}

export default Project;
import "./SummaryBlock.css";

function SummaryBlock ({ wrapperClass, bgClass, image, metadata, technologies, github, liveSite }) {

    const labels = { role: "Role", projectType: "Project Type", platform: "Platform", design: "Design", focus: "Focus", projects: "Projects" };

    return (
        <section className={`project-summary ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <div className="grid-d-two-cols">

                    <div className="project-summary-details">
                        {Object.entries(metadata).map(([key, value]) => (

                            <div key={key} className="project-summary-row">
                                <div className="project-summary-row-label">{labels[key]}</div>
                                <div className="project-summary-row-value"><p>{value}</p></div>
                            </div>
                            
                        ))}
                    </div>

                    <div>
                        <img src={image} alt="" />                        
                    </div>

                </div>

                {technologies &&
                    <div className="project-summary-technologies">
                        <p className="t-white"><strong>Technologies</strong></p>
                        <ul>
                            {technologies.map((tech) => (
                                <li key={tech}><span>{tech}</span></li>
                            ))}
                        </ul>
                    </div>
                }

                <div className="project-summary-links">
                    <div className="btn-flex">
                        <div>{github && ( <a href={github} className="btn btn-outline">GitHub</a> )}</div>
                        <div>{liveSite && ( <a href={liveSite} className="btn btn-outline">Live Demo</a> )}</div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default SummaryBlock;
function SummaryBlock ({ wrapperClass, bgClass, metadata, technologies, github, liveSite }) {

    const labels = { role: "Role", projectType: "Project Type", year: "Year", status: "Status" };

    return (
        <section className={`${bgClass || 'dark-bg black-bg'} project-summary`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <h2>Summary</h2>

                <div className="project-summary-details grid">
                    {Object.entries(metadata).map(([key, value]) => (
                        <div key={key}>
                            <div><strong>{labels[key]}</strong></div>
                            <div><p>{value}</p></div>
                        </div>
                    ))}

                </div>

                <div className="project-summary-technologies">
                    <p className="t-white"><strong>Technologies</strong></p>
                    <ul>
                        {technologies.map((tech) => (
                            <li key={tech}><span>{tech}</span></li>
                        ))}
                    </ul>
                </div>


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
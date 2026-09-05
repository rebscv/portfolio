import "./hero.css";

function Hero ({ title, subtitle, description, image, imageAlt, imageMobile, imageTablet, metadata, technologies, github, liveSite }) {

    const labels = { role: "Role", projectType: "Project Type", platform: "Platform", design: "Design", focus: "Focus", projects: "Projects", template: "Template", project: "Project", year: "Year" };

    return (
        <section className="project-hero black-bg dark-bg">
            <div className="full-wrapper">

                <picture>
                    <source media="(min-width: 768px)" srcSet={image} />
                    {imageTablet && <source media="(min-width: 576px)" srcSet={imageTablet} />}
                    {imageMobile && <source srcSet={imageMobile} />}
                    <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" />
                </picture>
                
                <div className="hero-banner-layer">
                    <div className="hero-banner-text">

                        <div className="hero-banner-title">
                            {subtitle && <h2 className="title-eyebrow">{subtitle}</h2>}
                            <h1>{title}</h1>                            
                        </div>



                        <div className="hero-summary-details">

                            {metadata && 
                                <div className="hero-summary-details-rows">
                                    {Object.entries(metadata).map(([key, value]) => (
                                        <div key={key} className="hero-summary-row">
                                            <div className="hero-summary-row-label">{labels[key]}</div>
                                            <div className="hero-summary-row-value">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            }

                            {technologies &&
                                <div className="hero-summary-technologies">
                                    <p className="hero-summary-technologies-head">Technologies</p>
                                    <ul>
                                        {technologies.map((tech) => (
                                            <li key={tech}><span>{tech}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            
                            {/* <div className="hero-summary-links">
                                <div className="btn-flex">
                                    <div>{github && ( <a href={github} className="btn btn-outline">GitHub</a> )}</div>
                                    <div>{liveSite && ( <a href={liveSite} className="btn btn-outline">Live Demo</a> )}</div>
                                </div>
                            </div> */}

                        </div>


                    </div>
                </div>

                <div className="project-hero-fade"></div>

            </div>
            <span id="overview"></span>
        </section>
    )
}

export default Hero;
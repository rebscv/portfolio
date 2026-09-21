import { useEffect, useState } from "react";
import FadeIn from "../../../animations/FadeIn";

import "./Hero.css";

function Hero ({ title, subtitle, image, imageAlt, imageMobile, imageTablet, summaryImage, metadata, technologies, heroClass, summaryImageWidth, summaryImageHeight }) { 

    const [imageLoaded, setImageLoaded] = useState(false);    
    useEffect(() => { setImageLoaded(false); }, [image, imageTablet, imageMobile] );

    const labels = { role: "Role", projectType: "Project Type", platform: "Platform", design: "Design", focus: "Focus", projects: "Projects", template: "Template", project: "Project", year: "Year", migration: "Migration" };    

    return (
        <section className={`project-hero black-bg dark-bg ${heroClass || ''}`}>
            <div className="full-wrapper">

                <div className="hero-banner">
                    <FadeIn direction="up" duration={1} delay={0.3}>
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={image} />
                            {imageTablet && <source media="(min-width: 768px)" srcSet={imageTablet} />}
                            {imageMobile && <source srcSet={imageMobile} />}
                            <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" onLoad={() => setImageLoaded(true)} />
                        </picture>
                    </FadeIn>
                </div>
                
                <div className="hero-banner-layer">
                    <div className="hero-banner-text">

                        <div className="hero-banner-title">
                            {subtitle && <h2 className="title-eyebrow">{subtitle}</h2>}
                            <h1>{title}</h1>                            
                        </div>


                        {summaryImage && ( <div className="hero-summary-img">
                            <div className="hero-summary-img-window">
                                <div className="hero-summary-img-screen">
                                    
                                    <img src={summaryImage} alt={`${title} website preview`} width={summaryImageWidth} height={summaryImageHeight} loading="lazy" />
                                    
                                </div>
                            </div>                            
                        </div> )}


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
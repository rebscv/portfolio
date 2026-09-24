import { img } from "framer-motion/client";
import { Link } from "react-router-dom";
import FadeIn from "../../../animations/FadeIn";

import "./PreviewBlock.css";

function PreviewBlock ({ title, titleEyebrow, text, wrapperClass, bgClass, backgroundImage, gridClass, image, imageAlt, imageWidth, imageHeight, github, liveSite, liveSiteBtn, versions = [] }) {

    return (
        <section className={`preview-block-content ${bgClass || 'dark-bg black-bg'}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${wrapperClass || 'full-wrapper'}`}>

                <div className={`${gridClass || 'grid-d-two-cols grid-d-reverse'}`}>

                    {image && <FadeIn direction="up" duration={1} delay={0.6} className="center-img"><img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} /></FadeIn>}

                    <FadeIn className="center-content" direction="up" duration={1} delay={0.3}>
                        <div className="grid">

                            {titleEyebrow && 
                                <div className="project-text-block-title-eyebrow">
                                    <h2 className="title-eyebrow">{titleEyebrow}</h2>
                                    <h3 className="h2">{title}</h3>
                                </div>
                            }

                            {!titleEyebrow && title && (<h2>{title}</h2>)}
                            
                            {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }
                            
                            <div className="btn-flex">

                                {liveSite &&                                 
                                    <Link className="btn btn-primary btn-full" to={liveSite} target="_blank">
                                        <svg className="icon-website"><use xlinkHref="/icons.svg#icon-website"></use></svg>
                                        <span>{liveSiteBtn}</span>                                        
                                    </Link>                                
                                }

                                {github &&                                
                                    <Link className="btn btn-outline btn-full" to={github} target="_blank">                                        
                                        <svg className="icon-github"><use xlinkHref="/icons.svg#icon-github"></use></svg>
                                        <span>View GitHub</span>
                                    </Link>                              
                                }

                            </div>

                            {versions && 
                                <>                                
                                    <div className="preview-block-versions-border"></div>                                
                                    <div className="preview-block-versions grid-xl-two-cols">

                                        {versions.map((version, index) => (

                                            <div key={index} className="preview-version-item grid">     

                                                {version.title && ( 
                                                    <div className="project-text-block-title-eyebrow">
                                                        <div className="h2"><span className="title-eyebrow">Live Demo</span></div>
                                                        <h4 className="preview-version-head">{version.title}</h4> 
                                                    </div>
                                                )}

                                                {version.text && ( Array.isArray(version.text) ? version.text.map((para, i) => <p key={i}>{para}</p> ) : <p>{version.text}</p> )}                                        
                                                {version.link && (<Link to={version.link} className="btn btn-outline" target="_blank"><svg className="icon-website"><use xlinkHref="/icons.svg#icon-website"></use></svg>View Demo</Link>)}
                                                                                  
                                            </div>

                                        ))}                                
                                        
                                    </div>
                                </>
                            }

                        </div>
                    </FadeIn>                    
                    
                </div>

            </div>
        </section>
    )
}

export default PreviewBlock;
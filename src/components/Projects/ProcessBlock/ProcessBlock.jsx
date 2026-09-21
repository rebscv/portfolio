import FadeIn from "../../../animations/FadeIn";

import "./ProcessBlock.css"

function ProcessBlock ({ wrapperClass, bgClass, title, titleEyebrow, backgroundImage, steps = [] }) {

    return (
        <section className={`project-process ${bgClass || 'dark-bg black-bg'}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <FadeIn direction="up" duration={2} delay={0.3}>

                    <div className="grid">

                        {titleEyebrow &&
                            <div className="project-text-block-title-eyebrow">
                                <h2 className="title-eyebrow">{titleEyebrow}</h2>
                                <h3 className="h2">{title}</h3>
                            </div>
                        }
                        {!titleEyebrow && title && (<h2>{title}</h2>)}

                        <div className="project-process-steps grid-l-two-cols">
                            {steps.map((step, index) => (

                                <FadeIn direction="up" key={index} delay={index * 0.3}>
                                    <div className={`project-process-block grid ${step.extraClass || ''}`}>
                                        {step.number && ( <div className="h2">{step.number}</div> )}
                                        {step.title && ( <div className="project-process-block-title">{step.title}</div> )}                            
                                        {step.description && ( Array.isArray(step.description) ? step.description.map((para, i) => <p key={i}>{para}</p> ) : <p>{step.description}</p> )}
                                    </div>
                                </FadeIn>

                            ))}
                        </div>

                    </div>

                </FadeIn>            
            </div>

            <div className="gradiant-black-overlay-bg"></div>
        </section>
    )
}

export default ProcessBlock;
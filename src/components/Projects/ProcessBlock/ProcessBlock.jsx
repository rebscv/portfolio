import FadeIn from "../../../animations/FadeIn";
import { div } from "framer-motion/client";

import "./ProcessBlock.css"

function ProcessBlock ({ wrapperClass, bgClass, title, titleEyebrow, steps = [] }) {

    return (
        <section className={`project-process ${bgClass || 'dark-bg black-bg'}`}>
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
                        <div className="project-process-steps grid-t-two-cols">

                            {steps.map((step, index) => (


                                <FadeIn direction="up" key={step.id} delay={index * 0.3}>
                                    <div key={index} className="project-process-block grid">
                                        {step.number && (
                                            <div className="h2">{step.number}</div>
                                        )}
                                        {step.title && (
                                            <div className="project-process-block-title">{step.title}</div>
                                        )}
                            
                                        {step.description && (
                                            Array.isArray(step.description) ? step.description.map((para, i) => <p key={i}>{para}</p> ) : <p>{step.description}</p>
                                        )}
                                    </div>
                                </FadeIn>


                            ))}

                        </div>
                    </div>

                </FadeIn>

            
            </div>
        </section>
    )
}

export default ProcessBlock;
import { div } from "framer-motion/client";

function Process ({ wrapperClass, bgClass, title, steps = [] }) {

    return (
        <section className={`project-summary ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                {title && <h2>{title}</h2>}

                {steps.map((step, index) => (

                    <div key={index}>

                        {step.number && (
                            <div>{step.number}</div>
                        )}

                        {step.title && (
                            <div>{step.title}</div>
                        )}
                        
                        {step.description && (
                            Array.isArray(step.description) ? step.description.map((para, i) => <p key={i}>{para}</p> ) : <p>{step.description}</p> 
                        )}

                    </div>

                ))}


            
            </div>
        </section>
    )
}

export default Process;
import FadeIn from "../../../animations/FadeIn";
import "./TextBlock.css";

function Text ({ title, titleEyebrow, text, wrapperClass, bgClass, backgroundImage }) {

    return (
        <section className={`project-text-block ${bgClass || 'dark-bg black-bg'}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <FadeIn direction="up" duration={1} delay={0.3}>
                    <div className="project-text-block-content grid">

                        {titleEyebrow && 
                            <div className="project-text-block-title-eyebrow">
                                <h2 className="title-eyebrow">{titleEyebrow}</h2>
                                <h3 className="h2">{title}</h3>
                            </div>
                        }

                        {!titleEyebrow && title && (<h2>{title}</h2>)}
                        
                        {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }

                    </div>
                </FadeIn>


            </div>            
        </section>
    )
}

export default Text;
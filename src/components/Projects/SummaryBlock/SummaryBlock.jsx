import FadeIn from "../../../animations/FadeIn";
import "./SummaryBlock.css";

function SummaryBlock ({ bgClass, backgroundImage, titleEyebrow, title, text, image }) {

    return (

        <section className={`project-summary ${bgClass || 'dark-bg black-bg'}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="lrg-wrapper t-center">

                <FadeIn direction="up" duration={1} delay={0.3}>
                    <div className="grid">

                        {titleEyebrow && 
                            <div className="project-text-block-title-eyebrow">
                                <h2 className="title-eyebrow">{titleEyebrow}</h2>
                                <h3 className="h2">{title}</h3>
                            </div>
                        }
                        {!titleEyebrow && title && (<h2>{title}</h2>)}

                        <div className="project-summary-img"><img src={image} /></div>
                        
                        <div className="project-summary-text grid">{Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }</div>
                        

                    </div>
                </FadeIn>


            </div>            
        </section>

    )
}

export default SummaryBlock;
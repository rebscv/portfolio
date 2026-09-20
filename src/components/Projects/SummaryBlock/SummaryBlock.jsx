import FadeIn from "../../../animations/FadeIn";
import "./SummaryBlock.css";

function SummaryBlock ({ bgClass, backgroundImage, titleEyebrow, title, text, image, imageAlt, imageWidth, imageHeight }) {

    return (

        <section className={`project-summary grid ${bgClass || 'dark-bg black-bg'}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            
            <div className="sml-wrapper no-padding-bottom t-center">
                <FadeIn direction="up" duration={1} delay={0.3}>
                    {titleEyebrow && 
                        <div className="project-text-block-title-eyebrow">
                            <h2 className="title-eyebrow">{titleEyebrow}</h2>
                            <h3 className="h2">{title}</h3>
                        </div>
                    }
                    {!titleEyebrow && title && (<h2>{title}</h2>)}
                </FadeIn>
            </div>

            <div className="std-wrapper no-padding-top no-padding-bottom t-center">                
                <div className="grid">

                    <FadeIn direction="up" duration={1} delay={0.6}>
                        <div className="project-summary-img"><img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} /></div>    
                    </FadeIn>                     

                </div>
            </div>

            <div className="sml-wrapper no-padding-top t-center">              
                
                    <div className="project-summary-text grid">
                        {Array.isArray(text) ? text.map((para, i) => <FadeIn key={i} direction="up" duration={1}><p>{para}</p></FadeIn>) : <FadeIn direction="up" duration={1}><p>{text}</p></FadeIn> }
                    </div>
                                       
            </div>   
       
        </section>

    )
}

export default SummaryBlock;
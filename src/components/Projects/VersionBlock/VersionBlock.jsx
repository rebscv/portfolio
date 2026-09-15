import { useState } from "react";
import FadeIn from "../../../animations/FadeIn";

import "./VersionBlock.css";

function VersionBlock ({ title, titleEyebrow, text, wrapperClass, bgClass, backgroundImage, version1Image, version2Image, version3Image, }) {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className={`version-block ${bgClass || 'dark-bg black-bg'}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <FadeIn direction="up" duration={1} delay={0.6}>
                    {titleEyebrow && 
                        <div className="project-text-block-title-eyebrow">
                            <h2 className="title-eyebrow">{titleEyebrow}</h2>
                            <h3 className="h2">{title}</h3>
                        </div>
                    }

                    {!titleEyebrow && title && (<h2>{title}</h2>)}
                </FadeIn>
                
                <FadeIn direction="up" duration={1} delay={0.6}>
                    {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }
                </FadeIn>

                <FadeIn direction="up" duration={1} delay={0.6}>
                    <div className="version-block-tabs-btns">
                        <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>Version 1</button>
                        <button className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>Version 2</button>
                        <button className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>Version 3</button>
                    </div>
                </FadeIn>

                <div className="version-block-tabs">

                    {activeTab === 1 && (
                        <FadeIn direction="up" duration={1.5}><div className="version-block-tab-content">{version1Image && <div className=""><img src={version1Image} /></div>}</div></FadeIn>
                    )}

                    {activeTab === 2 && (
                        <FadeIn direction="up" duration={1.5}><div className="version-block-tab-content">{version2Image && <div className=""><img src={version2Image} /></div>}</div></FadeIn>
                    )}


                    {activeTab === 3 && (
                        <FadeIn direction="up" duration={1.5}><div className="version-block-tab-content">{version3Image && <div className=""><img src={version3Image} /></div>}</div></FadeIn>
                    )}

                </div>

            </div>

        </section>
    )
}

export default VersionBlock;
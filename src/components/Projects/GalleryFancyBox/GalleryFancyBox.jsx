import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import "./GalleryFancyBox.css";

function GalleryFancyBox ({ wrapperClass, bgClass, titleEyebrow, title, items, project }) {

    const [open, setOpen] = useState(false);
    const [activeGallery, setActiveGallery] = useState([]);

    return (
        <section className={`project-gallery-fancybox ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'lrg-wrapper'}`}>

                {titleEyebrow && 
                    <div className="project-text-block-title-eyebrow t-center">
                        <h2 className="subtitle-eyebrow">{titleEyebrow}</h2>
                        <h3 className="h2">{title}</h3>
                    </div>
                }

                {!titleEyebrow && title && (<h2 className="t-center">{title}</h2>)}



                <div className="project-gallery-fancybox-grid grid-d-two-cols">
                    {items.map((item, index) =>(

                        <button className="project-gallery-card" key={index} type="button" onClick={() => {setActiveGallery(item.gallery); setOpen(true); }}>

                            <img className="project-gallery-card-logo" src={item.brandLogo} />
                            <img src={item.brandImg} />
                            <h3>{item.projectCardTitle}</h3>

                        </button>

                    ))}
                </div>

                <Lightbox open={open} close={() => setOpen(false)}
                    slides={activeGallery.map((item) => ({ src: item.image }))}
                />


            
            </div>
        </section>
    )
}

export default GalleryFancyBox;


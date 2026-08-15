import { useRef, useState } from "react";
import Lightbox, { useController } from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import "./GalleryFancyBox.css";

function GalleryFancyBox ({ bgClass, titleEyebrow, title, items, project }) {

    const [open, setOpen] = useState(false);
    const [activeGallery, setActiveGallery] = useState([]);    
    const previousIndex = useRef(0);
    const lightboxRef = useRef(null);

    return (
        <section className={`project-gallery-fancybox ${bgClass || 'dark-bg black-bg'}`}>
            <div className="full-wrapper">

                {titleEyebrow && 
                    <div className="project-text-block-title-eyebrow t-center">
                        <h2 className="subtitle-eyebrow">{titleEyebrow}</h2>
                        <h3 className="h2">{title}</h3>
                    </div>
                }

                {!titleEyebrow && title && (<h2 className="t-center">{title}</h2>)}



                <div className="project-gallery-fancybox-grid grid-d-three-cols">
                    {items.map((item, index) =>(

                        <button className="project-gallery-card" key={index} type="button" onClick={() => {setActiveGallery(item.gallery); previousIndex.current = 0; setOpen(true); }}>

                            <img className="project-gallery-card-logo" src={item.brandLogo} />
                            <img className="project-gallery-thumb" src={item.brandImg} />
                            <h3>{item.projectCardTitle}</h3>

                        </button>

                    ))}
                </div>

                <Lightbox open={open} close={() => setOpen(false)} controller={{ ref: lightboxRef }} animation={{ fade: 600 }} slides={activeGallery.map((item) => ({ src: item.image }))} 
                    on={{ view: ({ index }) => {
                        if ( previousIndex.current === activeGallery.length - 1 && index === 0 ) { lightboxRef.current?.close();; return; }
                        if ( previousIndex.current === 0 && index === activeGallery.length - 1 ) { lightboxRef.current?.close(); return; }
                        previousIndex.current = index;                        
                    } }}
                />
            
            </div>
        </section>
    )
}

export default GalleryFancyBox;


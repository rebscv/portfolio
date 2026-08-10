import "./GalleryBlock.css";

function GalleryBlock ({ wrapperClass, bgClass, titleEyebrow, title, items, project }) {

    return (
        <section className={`project-gallery ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'lrg-wrapper'}`}>

                {titleEyebrow && 
                    <div className="project-text-block-title-eyebrow t-center">
                        <h2 className="subtitle-eyebrow">{titleEyebrow}</h2>
                        <h3 className="h2">{title}</h3>
                    </div>
                }

                {!titleEyebrow && title && (<h2 className="t-center">{title}</h2>)}



                <div className="project-gallery-brand-content">

                    <div className="project-gallery-nav">
                        {items.map((item) =>(
                            <div className="project-gallery-nav-col" key={item.id}>{item.brand}</div>
                        ))}
                    </div>

                    {items.map((item) =>(
                        <div className="project-gallery-brand-row" key={item.id}>

                            <div className="project-gallery-brand-title">
                                <img className="project-gallery-brand-logo" src={item.brandLogo} />
                                <h3>{item.brand}</h3>
                            </div>
                            


                            <div className={`project-features-grid ${item.gridColumns || 'grid-d-three-cols'}`}>
                                

                                {item.gallery.map((gallery) =>(
                                    

                                        <div key={gallery.id}>
                                            <img src={gallery.image} alt={gallery.imageAlt} loading="lazy" width={gallery.width} height={gallery.height} />
                                        </div>

                                    
                                ))}

                            </div>
                        </div>
                    ))}

                </div>


            
            </div>
        </section>
    )
}

export default GalleryBlock;


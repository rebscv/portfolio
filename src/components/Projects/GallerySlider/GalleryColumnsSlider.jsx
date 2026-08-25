import useEmblaWithDots from "../../../hooks/useEmblaCarouselWithDots";
import { Link, useLocation } from "react-router-dom"
import "./GallerySlider.css";

function GalleryColumnsSlider({ items, title, titleEyebrow, wrapperClass, bgClass }) {

    const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true }, 4000);

    return (
        <section className={`project-gallery-columns-slider ${bgClass || 'dark-bg'}`}>
            <div className={`${wrapperClass || 'full-wrapper'}`}>


                {titleEyebrow && 
                    <div className="project-text-block-title-eyebrow t-center">
                        <h2 className="title-eyebrow">{titleEyebrow}</h2>
                        <h3 className="h2">{title}</h3>
                    </div>
                }

                {!titleEyebrow && title && (<h2>{title}</h2>)}


                <div className="embla">

                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">

                            {items.map((slide) => (
                                <div className={`embla__slide project-gallery-columns ${slide.className}`} key={slide.id}>


                                    <div className="project-gallery-slide-inner">
                                        <div className="project-gallery-flex">
                                            <div class="gallery-column-img">
                                                <picture>
                                                    <source media="(max-width: 767px)" srcSet={slide.imageMobile} />
                                                    <img src={slide.imageOne} alt={slide.title} fetchPriority="high" />
                                                </picture>
                                            </div>

                                            {slide.imageTwo && 

                                                <div class="gallery-column-img">
                                                    <picture>
                                                        <source media="(max-width: 767px)" srcSet={slide.imageMobile} />
                                                        <img src={slide.imageTwo} alt={slide.title} fetchPriority="high" />
                                                    </picture>
                                                </div>

                                            }

                                        </div>
                                    </div>


                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="embla__dots__container">            

                        <button className="embla__prev" onClick={() => { scrollPrev(); resetAutoplay(); }}><svg className="icon-arrow-left"><use href="/icons.svg#icon-arrow-left"></use></svg></button>
                        <div className="embla__dots">                          
                            {items.map((_, index) => (
                                <button key={index} className={`embla__dot ${index === selectedIndex ? "is-active" : ""}`} onClick={() => {scrollTo(index); resetAutoplay();}} >
                                    {index === selectedIndex && (<span className="embla__dot-progress" />)}
                                </button>
                            ))}                           
                        </div>
                        <button className="embla__next" onClick={() => { scrollNext(); resetAutoplay(); }}><svg className="icon-arrow-right"><use href="/icons.svg#icon-arrow-right"></use></svg></button>

                    </div>



                </div>



          
            </div>            
        </section>
    )

}

export default GalleryColumnsSlider;
import useEmblaWithDots from "../../../hooks/useEmblaCarouselWithDots";
import { Link, useLocation } from "react-router-dom"
import "./GallerySlider.css";

function GallerySlider({ items, title, titleEyebrow, text, wrapperClass, bgClass }) {

    const { emblaRef, emblaApi, selectedIndex, scrollTo, resetAutoplay, scrollNext, scrollPrev, } = useEmblaWithDots({ loop: true }, 4000);

    return (
        <section className={`project-gallery-slider ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'full-wrapper'}`}>



                <div className="embla">

                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">

                            {items.map((slide) => (
                                <div className={`embla__slide ${slide.className}`} key={slide.id}>
                                    <picture>
                                        <source media="(max-width: 767px)" srcSet={slide.imageMobile} />
                                        <img src={slide.image} alt={slide.title} fetchPriority="high" />
                                    </picture>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="embla__dots__container">
                        <div className="embla__dots">
                            {items.map((_, index) => (

                                <button key={index} className={`embla__dot ${index === selectedIndex ? "is-active" : ""}`} onClick={() => {scrollTo(index); resetAutoplay();}} >
                                    {index === selectedIndex && (<span className="embla__dot-progress" />)}
                                </button>

                            ))}
                        </div>
                    </div>

                    <div className="embla__arrows__container">

                        <button className="embla__prev" onClick={() => { scrollPrev(); resetAutoplay(); }}>
                            <svg className="icon-arrow-left"><use href="/icons.svg#icon-arrow-left"></use></svg>
                        </button>

                        <button className="embla__next" onClick={() => { scrollNext(); resetAutoplay(); }}>
                            <svg className="icon-arrow-right"><use href="/icons.svg#icon-arrow-right"></use></svg>                   
                        </button>

                    </div>

                </div>



          
            </div>            
        </section>
    )

}

export default GallerySlider
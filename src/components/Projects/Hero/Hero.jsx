import "./hero.css";

function Hero ({ title, subtitle, image, imageAlt, imageMobile }) {

    return (
        <section className="project-hero black-bg dark-bg">
            <div className="full-wrapper">

                <picture>
                    <source media="(min-width: 1025px)" srcSet={image} />
                    <source srcSet={imageMobile} />
                    <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" />
                </picture>
                
                <div className="hero-banner-layer">
                    <div className="hero-banner-text">

                        <h1>{title}</h1>
                        {subtitle && <h2>{subtitle}</h2>}

                        <a className="project-hero-more" href="#overview">
                            <svg className="icon-more-arrow" aria-hidden="true"><use xlinkHref="/icons.svg#icon-more-arrow"></use></svg>
                        </a>

                    </div>
                </div>



                <div className="project-hero-fade"></div>

            </div>
            <span id="overview"></span>
        </section>
    )
}

export default Hero;
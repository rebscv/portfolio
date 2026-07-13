import "./hero.css";

function Hero ({ title, image, imageAlt, imageMobile }) {

    return (
        <section className="project-hero dark-bg">
            <div className="full-wrapper">

                <picture>
                    <source media="(min-width: 1025px)" srcSet={image} />
                    <source srcSet={imageMobile} />
                    <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" />
                </picture>
                
                <div className="hero-banner-layer">
                    <div className="hero-banner-text">
                        <h1>{title}</h1>
                    </div>
                </div>

            </div>            
        </section>
    )
}

export default Hero;
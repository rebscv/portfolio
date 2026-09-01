
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import "./Hero.css";

import FadeIn from "../../animations/FadeIn";

import heroBanner           from "../../assets/hero/hero-banner.webp";
import heroBannerMobile     from "../../assets/hero/hero-banner-m.webp";

function Hero() {
    const heroRef = useRef(null);
    const heroImageRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        const image = heroImageRef.current;

        if (!hero || !image) return;

        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();

            const mouseX = (e.clientX - rect.left) / rect.width;
            const mouseY = (e.clientY - rect.top) / rect.height;

            // Convert 0 → 1 into -1 → 1
            const x = (mouseX - 0.5) * 2;
            const y = (mouseY - 0.5) * 2;

            const maxMovement = 16;

            image.style.transform = `
                scale(1.05)
                translate(${-x * maxMovement}px, ${-y * maxMovement}px)
            `;
        };

        const handleMouseLeave = () => {
            image.style.transform = "scale(1.05) translate(0, 0)";
        };

        hero.addEventListener("mousemove", handleMouseMove);
        hero.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            hero.removeEventListener("mousemove", handleMouseMove);
            hero.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="hero-content">
            <div ref={heroRef} className="full-wrapper">
                
                <div className="hero-layer dark-bg">
                    <div className="hero-txt grid">

                        <FadeIn direction="up" duration={1} delay={0.2} once={false}>
                            <h3 className="hero-subheading">Web Developer*</h3>
                        </FadeIn>

                        <h2>
                            <FadeIn direction="up" duration={1} delay={0.4} once={false}><span className="hero-heading-lt">I like to</span></FadeIn>
                            <FadeIn direction="up" duration={1} delay={0.6} once={false}><span className="hero-heading">create</span></FadeIn>
                        </h2>

                        <FadeIn direction="up" duration={1} delay={1} once={false}>
                            <div className="hero-subheading-lt">*and more...</div>
                        </FadeIn>


                        <FadeIn direction="up" duration={1} delay={0.8} once={false}>
                            <div className="hero-description grid">
                                <p>Web Developer at Adtorque Edge, with 5 years of professional experience. Previous experience in Digital Design, Graphic Design & more.</p>
                                <div className="btn-flex">
                                    <div><Link to="/projects" className="btn btn-primary">View Projects <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                                    <div><Link to="/about" className="btn btn-outline">More About Me <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                                </div>
                            </div>
                        </FadeIn>
                    
                    </div>
                </div>

                <picture> 
                    <source media="(max-width: 767px)" srcSet={heroBannerMobile} />
                    <img src={heroBanner} alt="" fetchPriority="high" ref={heroImageRef} />
                </picture>



                <div className="hero-content-fade"></div>

            </div>
        </section>
    );
}

export default Hero;
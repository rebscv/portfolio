import "./Hero.css";
import heroBanner from "../../assets/hero/hero-banner.webp"

function Hero() {
    return (
        <section className="hero-content">
            <div className="full-wrapper">
                
                <div className="hero-layer dark-bg">
                    <div className="hero-txt">

                        <h2>
                            <span className="hero-heading">Building Modern Responsive</span>
                            <span className="hero-subheading">Web Experiences</span>
                        </h2>
                        
                    </div>
                </div>
                

                <img src={heroBanner} alt="" />

            </div>
        </section>
    )
}

export default Hero;
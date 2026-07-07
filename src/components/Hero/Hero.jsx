import "./Hero.css";
import heroPlaceholder from "../../assets/hero/hero-placeholder2.webp"

function Hero() {
    return (
        <section className="hero-content">
            <div className="full-wrapper">
                
                <div className="hero-layer dark-bg" style={{display: "none"}}>
                    <div className="hero-txt">
                        <h2>Frontend Developer</h2>
                        <p className="h3">Building modern, responsive web experiences.</p>
                    </div>
                </div>
                

                <img src={heroPlaceholder} alt="" />

            </div>
        </section>
    )
}

export default Hero;
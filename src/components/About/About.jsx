import { Link } from "react-router-dom";
import "./About.css";

import ImageMosaic from "../ImageMosaic/ImageMosaic";


function About() {
    return (
        <section className="about-content dark-bg dark-grey-bg">
            <div className="std-wrapper">

                <div className="grid-d-two-cols d-grid-cols-60-40">

                    <div className="center-content">
                        <div className="grid">

                            <span className="title-eyebrow">Greetings and Salutations</span>
                            <h1>I'm Reuven. I like creating, building and more.</h1>
                            
                            <p>Hi, I'm Reuven. I'm a Front End Developer who enjoys building clean, responsive and maintainable websites using HTML, CSS, JavaScript and WordPress, while continuing to expand my skills with React.</p>
                            <p>With a background in both development and digital design, I enjoy combining the technical and creative sides of a project to build websites that look good, work well and are easy to maintain. I'm always looking to learn, experiment and find better ways to build things.</p>
                            
                            <div className="btn-flex">
                                <div>
                                    <Link to="/about" className="btn btn-primary">Learn more <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link>
                                </div>
                                <div>
                                    <Link to="/projects" className="btn btn-outline">View Projects <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="hide-mobile">
                        <ImageMosaic />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;
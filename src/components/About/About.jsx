import { Link } from "react-router-dom";
import "./About.css";

import ImageMosaic from "../ImageMosaic/ImageMosaic";

import aboutImg from "../../assets/about-placeholder.webp";

function About() {
    return (
        <section className="about-content dark-bg dark-grey-bg">
            <div className="std-wrapper">

                <div className="grid-d-two-cols d-grid-cols-60-40">

                    <div className="center-content">
                        <div className="grid">

                            <h2>
                                <span className="title-eyebrow">About</span>
                                <span>HEYY!</span>
                            </h2>
                            <p>Hi, I'm Reuven.</p>
                            <p>Front End Developer building fast, scalable and maintainable websites using HTML, CSS, JavaScript and React.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus sem vitae nisi lacinia dictum. Integer auctor velit eget magna tempor dapibus. Curabitur auctor diam vel convallis tristique. Aenean nec pellentesque arcu. Duis id tellus eu purus iaculis lobortis eu in urna.</p>
                            <p>Morbi efficitur id ligula quis varius. Suspendisse ultricies molestie faucibus. Nullam urna libero, volutpat a tempus vel, dapibus sed orci. Sed leo nisi, tristique ac nulla vitae, ultricies mollis dui. Quisque cursus sollicitudin convallis. Donec eu facilisis ligula, at finibus eros. In eu facilisis magna. Mauris rhoncus nunc sit amet elit lacinia tempor a sit amet nibh.</p>
                            <div>
                                <Link to="/projects" className="btn btn-outline">View Projects <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link>
                            </div>

                        </div>
                    </div>

                    <div>
                        <ImageMosaic />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;
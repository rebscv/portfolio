import { span } from "framer-motion/client";
import "./Footer.css";

function Footer() {
    return (
        <>
        <footer className="dark-bg" >
            <span id="contact"></span>
            <div className="std-wrapper">
                
                
                <div className="grid-d-two-cols">

                    <div className="grid footer-text">
                        <h2 className="h1"><span className="title-eyebrow">Let's chat</span><span>Get in Touch</span></h2>
                        <p>Wanna learn more? Feel free to reach out to me via email or LinkedIn.</p>
                    </div>

                    <div className="footer-contact-flex">

                        <div className="footer-contact-row">
                            <a href="mailto:jose.vergara@live.com.au" target="_blank">
                                <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg>   
                                <div>jose.vergara@live.com.au</div>
                            </a>
                        </div>

                        <div className="footer-contact-row">           
                            <a href="https://au.linkedin.com/in/reuven-vergara-a98148167" target="_blank">
                                <svg className="icon-linkedin"><use xlinkHref="/icons.svg#icon-linkedin"></use></svg>
                                <div>LinkedIn</div>
                            </a>
                        </div>

                    </div>
                    
                </div>

            </div>
        </footer>
        </>
    );
}
    
export default Footer;
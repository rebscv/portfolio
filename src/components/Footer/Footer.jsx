import { span } from "framer-motion/client";
import "./Footer.css";

function Footer() {
    return (
        <>
        <span id="contact"></span>
        <footer className="dark-bg" >
            <div className="std-wrapper">
                
                
                <div className="grid-d-two-cols">

                    <div className="grid">
                        <h2 className="h1"><span class="title-eyebrow">Let's chat</span><span>Get in Touch</span></h2>
                        <p>Wanna learn more? Feel free to reach out to via email or LinkedIn</p>
                    </div>

                    <div className="footer-contact-flex">

                        <div className="footer-contact-row">
                            <a href="">
                                <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg>   
                                <div>jose.vergara@live.com.au</div>
                            </a>
                        </div>

                        <div className="footer-contact-row">           
                            <a href="">
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
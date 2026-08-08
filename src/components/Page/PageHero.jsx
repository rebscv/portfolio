import { motion, useScroll, useTransform } from "framer-motion";

import "./PageHero.css";


function PageHero({ title, eyebrow, text, image, imageMobile, alt, video, videoPoster }) {


    const { scrollY } = useScroll();

    const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(4px)"]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.05]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="page-hero">
      <div className="full-wrapper">


        <motion.div className="page-hero-img" style={{ filter: blur, scale, opacity, }}>
          
          {image && (
            <div className="page-hero-img">
              <picture>
                {imageMobile && (<source media="(max-width: 767px)" srcSet={imageMobile} />)}            
                <img src={image} alt={alt || title || ""} fetchPriority="high" />                            
              </picture>
            </div>
          )}

        </motion.div>



        <div className="page-hero-content t-center grid">
          {title && <h1> {eyebrow && <span className="title-eyebrow">{eyebrow}</span>} {title}</h1>}
          {text && <p>{text}</p>}



        </div>

      </div>
    </section>
  );
}

export default PageHero;



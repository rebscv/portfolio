import { motion, useScroll, useTransform } from "framer-motion";

import "./PageHero.css";


function PageHero({ title, eyebrow, text, image, imageMobile, imageTablet, imageLaptop, imageDesktop, alt, video, videoPoster }) {


    const { scrollY, scrollYProgress } = useScroll();

    const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(4px)"]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.05]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    // Fade out the image near the bottom of the page
    const bottomFade = useTransform(
        scrollYProgress,
        [0.9, 1],
        [1, 0]
    );

    // Combine both opacity animations
    const imageOpacity = useTransform(
        [opacity, bottomFade],
        ([currentOpacity, fade]) => currentOpacity * fade
    );

  return (
    <section className="page-hero">
      <div className="full-wrapper">
        

        <motion.div className="page-hero-img" style={{ filter: blur, scale, opacity: imageOpacity }}>
          <motion.div className="page-hero-motion" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 1, ease: "easeIn" }}>

            {image && (
              <div>
                <picture>
                  {imageDesktop && ( <source media="(max-width: 1999px)" srcSet={imageDesktop} /> )}
                  {imageLaptop && ( <source media="(max-width: 1439px)" srcSet={imageLaptop} /> )}
                  {imageTablet && ( <source media="(max-width: 1023px)" srcSet={imageTablet} /> )}
                  {imageMobile && ( <source media="(max-width: 767px)" srcSet={imageMobile} /> )}
                  <img src={image} alt={alt || title || ""} fetchPriority="high" width="2560" height="1080" />
                </picture>
              </div>
            )}

          </motion.div>
        </motion.div>


        <div className="page-hero-content t-center grid">
          {title && <div><h1>{eyebrow && <span className="title-eyebrow">{eyebrow}</span>}{title}</h1></div>}
          {text && ( <>{(Array.isArray(text) ? text : [text]).map((paragraph, index) => ( <p key={index}>{paragraph}</p> ))}</> )}
        </div>


      </div>
    </section>
  );
}

export default PageHero;



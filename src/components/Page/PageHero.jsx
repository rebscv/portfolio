import "./PageHero.css";

function PageHero({ title, eyebrow, text, image, imageMobile, alt, video, videoPoster }) {
  return (
    <section className="page-hero">
      <div className="sml-wrapper">

        {image && (
          <div className="page-hero-img">
            <picture>
              {imageMobile && (<source media="(max-width: 767px)" srcSet={imageMobile} />)}            
              <img src={image} alt={alt || title || ""} fetchPriority="high" />                            
            </picture>
          </div>
        )}


        <div className="page-hero-content t-center grid">
          {title && <h1> {eyebrow && <span className="title-eyebrow">{eyebrow}</span>} {title}</h1>}
          {text && <p>{text}</p>}



        </div>

      </div>
    </section>
  );
}

export default PageHero;



import thumbImg                     from "../../assets/projects/model-pages/thumb.webp";
import heroImg                      from "../../assets/projects/model-pages/hero.webp"
import heroMobileImg                from "../../assets/projects/model-pages/hero-m.webp"

const modelPages = {
  id                : 3,
  slug              : "model-pages",
  title             : "Vehicle Model Range Implementation",
  subtitle          : "Ford | FOTON | XPENG",
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",

  featureTagline    : "Cricks Noosa Nissan",
  featureTitle      : "WordPress Website Migration & Development",
  logo              : "",

  overview          : "A fully responsive dealership website showcasing reusable React components, routing, animations, responsive layouts and modern frontend development practices.",
  github            : "",
  liveSite          : "",

  sections      : [
    {
      type      : "hero",
      data      : "hero"
    },
    {
      type      : "summary",
      data      : "summary"
    }
  ],

  hero: {
    image         : heroImg,
    imageMobile   : heroMobileImg,
    imageAlt      : "Mazda",
    title         : "My React Project"
  },

  summary : {
    bgClass           : "",
    wrapperClass      : "std-wrapper",
    metadata          :
    {
      role            : "Frontend Developer",
      projectType     : "Personal Project",
      year            : 2026,
      status          : "In Progress",
    },
    technologies      : [ "React", "Vite", "React Router", "CSS", "Framer Motion", "Embla Carousel" ],
    github            : "My Gitbug link",
    liveSite          : "My Live Site link"
  }

};

export default modelPages;
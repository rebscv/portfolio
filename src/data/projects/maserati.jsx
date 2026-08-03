import thumbImg                     from "../../assets/projects/maserati/thumb.webp";
import featuredImg                  from "../../assets/projects/maserati/featured-thumb.webp";
import logoImg                      from "../../assets/projects/maserati/logo.webp";
import heroImg                      from "../../assets/projects/maserati/hero.webp"
import heroMobileImg                from "../../assets/projects/maserati/hero-m.webp"


const dealership = {
  id                : 4,
  slug              : "maserati",
  title             : "Auckland Maserati",
  subtitle          : "A modern dealership website built with React and Vite.",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",

  featuredImg       : featuredImg,
  featureTagline    : "Auckland Maserati",
  featureTitle      : "Figma to WordPress Development",
  logo              : logoImg,

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

export default dealership;
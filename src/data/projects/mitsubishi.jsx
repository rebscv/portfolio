import thumbImg           from "../../assets/projects/mitsubishi/thumb.webp";
import featuredImg        from "../../assets/projects/mitsubishi/featured-thumb.webp";
import heroImg            from "../../assets/projects/mitsubishi/hero.webp"
import heroMobileImg      from "../../assets/projects/mitsubishi/hero-m.webp"
import logoImg            from "../../assets/projects/mitsubishi/logo.webp"

const dealership = {
  id                : 3,
  slug              : "mitsubishi",
  title             : "Dealership WordPress",
  subtitle          : "A modern dealership website built with React and Vite.",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",

  featuredImg       : featuredImg,
  featureTagline    : "Chadstone Mitsubishi",
  featureTitle      : "WordPress Website Migration & Development",
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
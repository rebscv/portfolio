// src/data/projects/dealership.js

// Images
// import thumbnail from "../../assets/images/projects/dealership/thumbnail.jpg";
import heroPlaceholderImg from "../../assets/projects/mazda-dealership-react/thumb.webp";
import heroImg from "../../assets/projects/react/react-hero.webp"
import heroMobileImg from "../../assets/projects/react/react-hero-m.webp"
import imagePlaceholder from "../../assets/projects/react/mazda-assured.webp"

const dealership = {
  id            : 3,
  slug          : "react-dealership-three",
  title         : "React Dealership Three",
  subtitle      : "A modern dealership website built with React and Vite.",
  featured      : true,
  year          : 2026,
  thumbnail     : heroPlaceholderImg,
  heroImage     : "",
  overview      : "A fully responsive dealership website showcasing reusable React components, routing, animations, responsive layouts and modern frontend development practices.",
  github        : "",
  liveSite      : "",

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
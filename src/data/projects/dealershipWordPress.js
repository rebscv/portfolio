// src/data/projects/dealership.js

// Images
// import thumbnail from "../../assets/images/projects/dealership/thumbnail.jpg";
import heroPlaceholderImg from "../../assets/projects/dealerships/dealership-tile-placeholder-2.webp";
import thumbPlaceholderImg from "../../assets/projects/dealerships/dealership-tile-placeholder-2.webp";
import thumbImg from "../../assets/projects/dealership-wordpress/thumb.webp";
import heroImg from "../../assets/projects/react/react-hero.webp"
import logoImg from "../../assets/projects/dealership-wordpress/mitsubishi-logo.webp"
import heroMobileImg from "../../assets/projects/react/react-hero-m.webp"
import imagePlaceholder from "../../assets/projects/react/mazda-assured.webp"

const dealership = {
  id            : 2,
  slug          : "dealership-wordPress",
  title         : "Dealership WordPress",
  subtitle      : "A modern dealership website built with React and Vite.",
  featured      : true,
  year          : 2026,
  thumbnail     : thumbImg,
  heroImage     : "",
  platform      : "WordPress",
  featureTitle  : "Wordpress Template",
  logo          : logoImg,

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
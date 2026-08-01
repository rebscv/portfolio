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
import featuredCaseStudyImg from "../../assets/projects/dealership-wordpress/featured-case-study.webp"

const dealership = {
  id                : 2,
  slug              : "dealership-wordPress",
  title             : "Dealership WordPress",
  subtitle          : "A modern dealership website built with React and Vite.",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",
  featureTitle      : "Wordpress Template",
  logo              : logoImg,

  overview          : "A fully responsive dealership website showcasing reusable React components, routing, animations, responsive layouts and modern frontend development practices.",
  github            : "",
  liveSite          : "",

  featuredCaseStudy       : true,
  caseStudyHero           : featuredCaseStudyImg,
  caseStudyText           : "To learn React, I went through a ‘3 Stage’ system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus sem vitae nisi lacinia dictum. Integer auctor velit eget magna tempor dapibus. Curabitur auctor diam vel convallis tristique. Aenean nec pellentesque arcu. Duis id tellus eu purus iaculis lobortis eu in urna.",

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
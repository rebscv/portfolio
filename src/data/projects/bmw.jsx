import thumbImg               from "../../assets/projects/bmw/thumb.webp";
import featuredImg            from "../../assets/projects/bmw/featured-thumb.webp";
import heroImg                from "../../assets/projects/bmw/hero.webp"
import heroMobileImg          from "../../assets/projects/bmw/hero-m.webp"
import logoImg                from "../../assets/projects/bmw/logo.webp"
import featuredCaseStudyImg   from "../../assets/projects/bmw/featured-case-study.webp"


const dealership = {
  id                : 2,
  slug              : "bmw",
  title             : "BMW Dealership Website",
  subtitle          : "A modern dealership website built with React and Vite.",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",
  logo              : logoImg,

  featuredImg       : featuredImg,
  featureTagline    : "BMW Dealership Website",
  featureTitle      : "Custom WordPress Theme Development",

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
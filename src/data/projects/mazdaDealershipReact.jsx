// src/data/projects/dealership.js


// import thumbnail from "../../assets/images/projects/dealership/thumbnail.jpg";
import { data } from "react-router-dom";

import thumbPlaceholderImg          from "../../assets/projects/dealerships/dealership-tile-placeholder-1.webp";
import thumbImg                     from "../../assets/projects/mazda-dealership-react/thumb.webp";
import heroImg                      from "../../assets/projects/mazda-dealership-react/react-hero.webp"
import logoImg                      from "../../assets/projects/mazda-dealership-react/mazda-logo.webp"
import heroMobileImg                from "../../assets/projects/mazda-dealership-react/react-hero-m.webp"
import imagePlaceholder             from "../../assets/projects/mazda-dealership-react/mazda-assured.webp"
import featuredCaseStudyImg         from "../../assets/projects/mazda-dealership-react/featured-case-study.webp"

const dealership = {
  id                : 1,
  slug              : "react-dealership",
  title             : "React Dealership",
  subtitle          : "A modern dealership website built with React and Vite.",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "React",
  
  featureTitle      : "React Dealership Demo",
  featureTagline    : "React Website Development",
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
    },
    {
      type      : "textBlock",
      data      : "overview"
    },
    {
      type      : "featuresGrid",
      data      : "featuresGrid"
    },
    {
      type      : "gallery",
      data      : "gallery"
    },
    {
      type      : "techStack",
      data      : "techStack"
    },
    {
      type      : "cta",
      data      : "contact"
    }
  ],

  hero: {
    image         : heroImg,
    imageMobile   : heroMobileImg,
    imageAlt      : "Mazda",
    title         : "My React Project"
  },

  overview: {
    wrapperClass  : "std-wrapper",
    title         : "My Intro Section",
    text          : (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla nunc nulla, at accumsan velit mollis ac. Morbi aliquet neque sit amet lectus tincidunt, at consectetur urna porta.</p>
      <p>Mauris hendrerit nisl convallis dolor egestas posuere. Proin fermentum dictum enim vitae lacinia.</p>
    </>
    )
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
  },  

  featuresGrid: {
    bgClass       : "dark-grey-bg dark-bg",
    wrapperClass  : "std-wrapper",
    gridColumns   : "grid-d-four-cols",
    title         : "Key Features",

    items: [
      {
        title: "Responsive Design",
        description: "Optimised layouts for desktop, tablet and mobile devices."
      },
      {
        title: "Component Architecture",
        description: "Built using reusable React components."
      },
      {
        title: "Client-side Routing",
        description: "Implemented with React Router."
      },
      {
        title: "Animations",
        description: "Smooth transitions using Framer Motion."
      },
      {
        title: "Vehicle Filtering",
        description: "Interactive filtering and sorting functionality."
      },
      {
        title: "Responsive Images",
        description: "Optimised using the picture element."
      }
    ]

  },

  gallery : {
    wrapperClass  : "lrg-wrapper",
    title         : "Project Gallery",

    items         : [
      {
        id            : "1",
        image         : thumbPlaceholderImg,
        title         : "Homepage",
        description   : "Landing page with featured vehicles."
      },
      {
        id            : "2",
        image         : thumbPlaceholderImg
      },
      {
        id            : "3",
        image         : thumbPlaceholderImg
      }
    ]
  },

  techStack : {
    bgClass       : "dark-grey-bg dark-bg",
    wrapperClass  : "std-wrapper",
    gridColumns   : "grid-d-five-cols",
    title         : "Technology Stack",
    items         : [ "HTML5", "CSS3", "JavaScript", "React", "Vite", "Git" ]
  },

  contact : {
    wrapperClass  : "std-wrapper",
    title         : "Interested in working together?",
    text          : "If you'd like to discuss a project or learn more about my work, I'd love to hear from you.",
    buttons       :
    [
      {
          label: "Get In Touch",
          to: "/contact",
          style: "primary",
      },
      {
          label: "View All Projects",
          to: "/projects",
          style: "primary",
      }
    ]
  }



};

export default dealership;
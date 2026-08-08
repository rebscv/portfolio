import { data } from "react-router-dom";

import thumbImg                     from "../../assets/projects/react-dealership/thumb.webp";
import featuredImg                  from "../../assets/projects/react-dealership/featured-thumb.webp";
import logoImg                      from "../../assets/projects/react-dealership/logo.webp";
import heroImg                      from "../../assets/projects/react-dealership/hero.webp"
import heroMobileImg                from "../../assets/projects/react-dealership/hero-m.webp"
import featuredCaseStudyImg         from "../../assets/projects/react-dealership/featured-case-study.webp"
import thumbPlaceholderImg          from "../../assets/projects/react-dealership/featured-case-study.webp"

const reactDealerWebsite = {
  id                : 1,
  slug              : "react-development",
  title             : "React Development",
  subtitle          : "Mazda Demo",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "React",
  
  featuredImg       : featuredImg,
  featureTagline    : "React Dealership Demo",
  featureTitle      : "React Website Development",
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
    imageAlt      : "MX-5 driving on highway",
    title         : "React Developement",
    subtitle      : "Mazda Dealership Demo"
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
      Platform        : "WordPress",
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

export default reactDealerWebsite;
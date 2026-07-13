// src/data/projects/dealership.js


// import thumbnail from "../../assets/images/projects/dealership/thumbnail.jpg";
import { data } from "react-router-dom";
import thumbPlaceholderImg from "../../assets/projects/dealerships/dealership-tile-placeholder-1.webp";
import heroImg from "../../assets/projects/react/react-hero.webp"
import heroMobileImg from "../../assets/projects/react/react-hero-m.webp"
import imagePlaceholder from "../../assets/projects/react/mazda-assured.webp"

const dealership = {
  id            : 1,
  slug          : "react-dealership",
  title         : "React Dealership",
  subtitle      : "A modern dealership website built with React and Vite.",
  featured      : true,
  year          : 2026,
  thumbnail     : thumbPlaceholderImg,
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
    },
    {
      type      : "textblock",
      data      : "overview"
    },
    {
      type      : "fetureGrid",
      data      : "features"
    },
    {
      type      : "gallery",
      data      : "gallery"
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

  features: {
    wrapperClass  : "std-wrapper",
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
    wrapperClass  : "xl-wrapper",
    title         : "Project Gallery",

    items         : [
      {
        // image         : homepageImg,
        title         : "Homepage",
        description   : "Landing page with featured vehicles."
      },
      {
        // image         : stockImg,
        title         : "Stock Search",
        description   : "Filtering and sorting functionality."
      },
      {
        // image         : modelImg,
        title         : "Vehicle Details",
        description   : "Reusable model pages."
      }
    ]
  }

};

export default dealership;
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
      type      : "process",
      data      : "process"
    },
    {
      type      : "textBlock",
      data      : "architecture"
    },
    {
      type      : "textBlock",
      data      : "dataDriven"
    },
    {
      type      : "textBlock",
      data      : "wordpressToReact"
    },
    {
      type      : "textBlock",
      data      : "dynamicFunction"
    },
    {
      type      : "process",
      data      : "keySkills"
    },
    {
      type      : "gallerySlider",
      data      : "gallery"
    },
    {
      type      : "techStack",
      data      : "techStack"
    },
    {
      type      : "textBlock",
      data      : "outcome"
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
      status          : "Complete",
      
      focus           : "React Development / Front End Development",
      projects        : "Mazda",
      role            : "Frontend Developer",
      platform        : "React / Vite",
      design          : "Self-Directed & Based off Mazda AU OEM Website"
    },
    technologies      : [ "React", "Vite", "React Router", "CSS", "Framer Motion", "Embla Carousel" ],
    github            : "https://github.com/rebscv/react-dealership-homepage",
    liveSite          : "",
    image             : thumbImg
  },  

  overview : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From Frontend Foundations to React",
    text              :
    [
      "This project is a dealership-style website built with React and Vite as part of my transition into modern frontend development. The project was created to expand my existing frontend experience into React and build practical experience with component-based application development.",
      "The project was developed progressively across three stages. The first focused on establishing the component architecture and React fundamentals, including reusable components, props and dynamic rendering. The second introduced the visual foundation through CSS Grid, Flexbox, responsive layouts, spacing and typography, while the final stage brought the interface together with imagery, branding, icons, interactions and a fully responsive UI.",
      "The result is a polished dealership website demo that demonstrates my ability to apply existing frontend development skills to a modern React-based workflow, while developing a stronger understanding of reusable components, dynamic rendering and scalable frontend architecture."
    ]
  },


  process : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "The Process",
    title             : "Take it step by step",
    steps             :
    [
      {
        number      : "01",
        title       : "Version 1 — Component Architecture",
        description : [
          "The first version focused on learning and applying React fundamentals while establishing the structure of the site.",
          "I built the interface from reusable components, using props and dynamic rendering to create sections such as the Header, Hero, QuickLinks, Featured Stock, Welcome and Footer."
        ]
      },
      {
        number      : "02",
        title       : "Version 2 — Layout & Styling",
        description : [
          "With the component structure established, the second version focused on translating the layout into a complete visual interface.",
          "My existing web and graphic design experience helped shape the approach to spacing, typography, hierarchy and responsive layouts using CSS Grid and Flexbox."
        ]
      },
      {
        number      : "03",
        title       : "Version 3 — Full UI Implementation",
        description : [
          "The final version brought the application together as a polished dealership-style website.",
          "I introduced imagery, branding, icons, hover interactions and responsive behaviour, refining the interface across desktop, tablet and mobile screen sizes."
        ]
      },
      {
        number      : "04",
        title       : "Learning Through Building",
        description : "Breaking the project into three versions allowed me to progressively develop my React skills while applying the frontend, web design and graphic design experience I already had."
      }
    ]
  },

  architecture  : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "Component Architecture",
    title             : "Built to Scale",
    text              :
    [
      "Coming from a traditional HTML and CSS workflow, React introduced a different approach to structuring a website. Instead of building each section directly into a page, I could break the interface into reusable components and compose them together.",
      "Components such as vehicle cards, sliders, content sections and navigation elements could be created once and reused wherever they were needed.",
      "As the project grew, this approach made the codebase feel much easier to extend and maintain than repeatedly creating the same HTML structures."
    ]
  },
  
  dataDriven  : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "Data-Driven Development",
    title             : "Content Meets Components",
    text              :
    [
      "This was my first project where I used JavaScript data to drive the content and components of an entire website.",
      "In my previous work, I was used to building pages directly in HTML, writing the markup and repeating the required classes and structures for each section. I had used JSON data in other projects, but primarily for simple lists such as model names, images, URLs and descriptions.",
      "React introduced a different way of thinking. Instead of creating each piece of content manually, I could define the content in JavaScript data and have reusable components render it dynamically.",
      "I found this approach much more scalable and easier to maintain. Adding new content or changing an existing section no longer meant copying and updating large amounts of HTML. The component could remain the same while the data changed."
    ]
  },
  
  wordpressToReact  : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "From WordPress to React",
    title             : "Building on Existing Experience",
    text              :
    [
      "My previous experience developing dealership websites in WordPress gave me a strong foundation for approaching this project.",
      "Having already built a Mazda dealership template using HTML, CSS and WordPress, I was familiar with the structure, content and functionality required for this type of website. This allowed me to focus on learning how to implement those same concepts using React.",
      "Rather than starting with a completely unfamiliar project, I could apply my existing frontend and design knowledge while learning a new way of structuring and developing the application."
    ]
  },
  
  dynamicFunction : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "Dynamic Functionality",
    title             : "Beyond the Homepage",
    text              :
    [
      "Building the stock section was one of the most valuable parts of the project. My previous work had focused primarily on dealership website templates, so I had limited experience developing the stock search functionality itself.",
      "Using React, I built a dynamic stock page with filtering, sorting and search functionality, along with individual vehicle detail pages.",
      "I was surprised by how naturally React handled this type of interface. Managing the data and UI through components and state made it possible to build a feature-rich stock experience without needing to treat each result or page as a separate piece of markup."
    ]
  },

keySkills : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    title             : "Key Skills",
    steps             :
    [

      {
        title         : "React Development",
        description   : "Building a responsive dealership application using React and reusable components."
      },

      {
        title         : "Component Architecture",
        description   : "Creating reusable components that can be composed across different pages and sections."
      },

      {
        title         : "Dynamic Rendering",
        description   : "Using props, arrays and map() to generate reusable, data-driven interfaces."
      },

      {
        title         : "State & Filtering",
        description   : "Managing UI state to build interactive stock search, filtering and sorting functionality."
      },

      {
        title         : "Responsive Development",
        description   : "Applying existing HTML and CSS experience to create responsive React interfaces."
      },

      {
        title         : "React & Vite",
        description   : "Developing a modern frontend application using React with Vite as the development environment."
      }


    ]
  },

  gallery : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "Gallery",
    title             : "Gallery",
    items             :
    [
        {
            id: 1,
            image: featuredCaseStudyImg,
        },
        {
            id: 2,
            image: featuredCaseStudyImg,
        }
    ]
  },

  techStack : {
    bgClass       : "dark-grey-bg dark-bg",
    wrapperClass  : "std-wrapper",
    gridColumns   : "grid-d-five-cols",
    title         : "Technology Stack",
    items         : [ "React", "JavaScript (ES6+)", "Vite", "CSS", "React Router", "Embla Carousel", "Framer Motion", "React DatePicker", "Git", "Photoshop" ]
  },

  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "",
    title             : "A Bigger Picture",
    text              :
    [
      "Working with React helped me see frontend development from a broader perspective. Rather than thinking about a website as a collection of individual HTML pages, I started thinking about how data, components and functionality could work together to create a scalable application.",
      "The project showed me how a data-driven approach can reduce repetitive markup, make content easier to maintain and allow new pages and functionality to be added without rebuilding the same structures from scratch.",
      "It also gave me a better understanding of how modern frontend technologies can be used to build fast, responsive and scalable applications, while allowing me to bring my existing web development and design experience into a new technical workflow."
    ]
  },



};

export default reactDealerWebsite;
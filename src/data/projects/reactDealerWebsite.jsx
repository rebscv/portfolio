import thumbImg                     from "../../assets/projects/react-dealership/thumb.webp";
import featuredImg                  from "../../assets/projects/react-dealership/featured-thumb.webp";
import logoImg                      from "../../assets/projects/react-dealership/logo.webp";
import heroImg                      from "../../assets/projects/react-dealership/react-hero.webp";
import heroTabletImg                from "../../assets/projects/react-dealership/react-hero-t.webp";
import heroMobileImg                from "../../assets/projects/react-dealership/react-hero-m.webp";
import featuredCaseStudyImg         from "../../assets/projects/react-dealership/featured-case-study.webp";
import featuredCaseStudyImgDesktop  from "../../assets/projects/react-dealership/featured-case-study-1920x1280.webp"
import featuredCaseStudyImgLaptop   from "../../assets/projects/react-dealership/featured-case-study-1440x960.webp"
import featuredCaseStudyImgTablet   from "../../assets/projects/react-dealership/featured-case-study-1024x683.webp"
import featuredCaseStudyImgMobile   from "../../assets/projects/react-dealership/featured-case-study-768x512.webp"
import heroWebsiteImg               from "../../assets/projects/react-dealership/react-hero-website.webp";
import summaryImg                   from "../../assets/projects/react-dealership/summary.webp";
import summaryBgImg                 from "../../assets/projects/summary-bg.webp";
import galleryImg1                  from "../../assets/projects/react-dealership/gallery-1.webp";
import galleryImg2                  from "../../assets/projects/react-dealership/gallery-2.webp";
import galleryImg3                  from "../../assets/projects/react-dealership/gallery-3.webp";
import galleryImg4                  from "../../assets/projects/react-dealership/gallery-4.webp";
import galleryImg5                  from "../../assets/projects/react-dealership/gallery-5.webp";
import galleryImg6                  from "../../assets/projects/react-dealership/gallery-6.webp";
import galleryImg7                  from "../../assets/projects/react-dealership/gallery-7.webp";
import galleryImg8                  from "../../assets/projects/react-dealership/gallery-8.webp";
import galleryComparisonImg1        from "../../assets/projects/react-dealership/gallery-comparison-1.webp";
import galleryComparisonImg2        from "../../assets/projects/react-dealership/gallery-comparison-2.webp";
import galleryComparisonImg3        from "../../assets/projects/react-dealership/gallery-comparison-3.webp";
import galleryComparisonImg4        from "../../assets/projects/react-dealership/gallery-comparison-4.webp";
import architectureImg              from "../../assets/projects/react-dealership/architecture.webp";
import componentsImg                from "../../assets/projects/react-dealership/components.webp";
import buildingImg1                 from "../../assets/projects/react-dealership/building-1.webp";
import buildingImg2                 from "../../assets/projects/react-dealership/building-2.webp";
import buildingImg3                 from "../../assets/projects/react-dealership/building-3.webp";
import beyondImg                    from "../../assets/projects/react-dealership/beyond.webp";
import gradientBg                   from "../../assets/gradient-bg.webp";
import websiteVersion1Img           from "../../assets/projects/react-dealership/react-website-version-1.webp";
import websiteVersion2Img           from "../../assets/projects/react-dealership/react-website-version-2.webp";
import websiteVersion3Img           from "../../assets/projects/react-dealership/react-website-version-3.webp";
import livePreviewImg               from "../../assets/projects/react-dealership/react-live-preview.webp";

import { image } from "framer-motion/client";

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
  logo              : logoImg,

  featuredImg       : featuredImg,
  featuredImgAlt    : "Mazda Car with two people",
  featureTagline    : "React Dealership Demo",
  featureTitle      : "React Website Development",

  overview          : "A fully responsive dealership website showcasing reusable React components, routing, animations, responsive layouts and modern frontend development practices.",

  featuredCaseStudy     : true,
  caseStudyHero         : featuredCaseStudyImg,
  caseStudyHeroDesktop  : featuredCaseStudyImgDesktop,
  caseStudyHeroLaptop   : featuredCaseStudyImgLaptop,
  caseStudyHeroTablet   : featuredCaseStudyImgTablet,
  caseStudyHeroMobile   : featuredCaseStudyImgMobile,

  caseStudyHeroAlt  : "React Demo for Mazda Dealership Website",
  caseStudyText     : "I took a dealership template I had previously built and rebuilt it from the ground up in React. What started as a way to learn React became a full dealership demo featuring reusable components, dynamic content, routing, animations and an interactive vehicle stock experience.",

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
      type      : "textColumnBlock",
      data      : "wordpressToReact"
    },
    {
      type      : "process",
      data      : "process"
    },
    {
      type      : "versionBlock",
      data      : "versionComparison"
    },
    {
      type      : "gallerySlider",
      data      : "galleryVersions"
    },
    {
      type      : "textColumnBlock",
      data      : "architecture"
    },
    {
      type      : "textColumnBlock",
      data      : "dataDriven"
    },
    {
      type      : "textColumnBlock",
      data      : "dynamicFunction"
    },

    {
      type      : "process",
      data      : "keySkills"
    },
    {
      type      : "galleryColumnsSlider",
      data      : "gallery"
    },
    {
      type      : "textBlock",
      data      : "outcome"
    },
    {
      type      : "previewBlock",
      data      : "livePreview"
    }
    
  ],

  hero: {
    image         : heroImg,
    imageTablet   : heroTabletImg,
    imageMobile   : heroMobileImg,
    imageAlt      : "MX-5 driving on highway",
    title         : "React Developement",
    subtitle      : "Mazda Dealership Demo",
    summaryImage  : heroWebsiteImg,
    summaryImageWidth   : 892,
    summaryImageHeight  : 2030,
    metadata      :
    {
      role            : "Frontend Developer",
      projectType     : "Personal Project",
      year            : 2026,
      focus           : "React Development / Front End Development",
      projects        : "Mazda",
      role            : "Frontend Developer",
      platform        : "React / Vite",
      design          : "Self-Directed & Based off Mazda AU OEM Website"
    },
    technologies      : [ "React", "JavaScript (ES6+)", "Vite", "CSS", "React Router", "Embla Carousel", "Framer Motion", "React DatePicker", "Git", "Photoshop" ],
  },

  summary : {
    bgClass           : "",
    backgroundImage   : summaryBgImg,
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From Frontend Foundations to React",
    text              :
    [
      "This project is a dealership-style website built with React and Vite as part of my transition into modern frontend development. The project was created to expand my existing frontend experience into React and build practical experience with component-based application development.",
      "The project was developed progressively across three stages. The first focused on establishing the component architecture and React fundamentals, including reusable components, props and dynamic rendering. The second introduced the visual foundation through CSS Grid, Flexbox, responsive layouts, spacing and typography, while the final stage brought the interface together with imagery, branding, icons, interactions and a fully responsive UI.",
      "The result is a polished dealership website demo that demonstrates my ability to apply existing frontend development skills to a modern React-based workflow, while developing a stronger understanding of reusable components, dynamic rendering and scalable frontend architecture."
    ],
    image             : summaryImg,
    imageAlt          : "React Demo Mazda Dealership Website",
    imageWidth        : "1200",
    imageHeight       : "800"
  },

  process : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "The Process",
    title             : "Take it Step by Step",
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

  versionComparison  : {
    bgClass           : "",
    wrapperClass      : "lrg-wrapper no-padding-top t-center",
    titleEyebrow      : "Version Comparison",
    title             : "From scaffolding, re to polish",
    version1Image         : websiteVersion1Img,
    version1ImageAlt      : "Version 1 or React Demo",
    version1ImageWidth    : "1024",
    version1ImageHeight   : "1280",
    version2Image         : websiteVersion2Img,
    version2ImageAlt      : "Version 2 or React Demo",
    version2ImageWidth    : "1024",
    version2ImageHeight   : "1280",
    version3Image         : websiteVersion3Img,
    version3ImageAlt      : "Version 3 or React Demo",
    version3ImageWidth    : "1024",
    version3ImageHeight   : "1280"
  },

  galleryVersions : {
    bgClass           : "dark-bg gallery-react-versions",
    wrapperClass      : "no-padding-top",
    titleEyebrow      : "Version Comparison",
    title             : "Side By Side",
    items             :
    [
        {
            id: 1,
            image: galleryComparisonImg1,
            alt: "React Demo Homepage comparison with all versions",
            width: "1920",
            height: "1080"
        },
        {
            id: 2,
            image: galleryComparisonImg2,
            alt: "React Demo Offers Page comparison with all versions",
            width: "1920",
            height: "1080"
        },  
        {
            id: 3,
            image: galleryComparisonImg3,
            alt: "React Demo Finace Page comparison with all versions",
            width: "1920",
            height: "1080"
        },
        {
            id: 4,
            image: galleryComparisonImg4,
            alt: "React Demo About Page comparison with all versions",
            width: "1920",
            height: "1080"
        }
    ]
  },

  wordpressToReact  : {
    bgClass           : "gradient-bg",
    backgroundImage   : gradientBg,
    wrapperClass      : "sml-wrapper t-center",
    gridClass         : "",
    titleEyebrow      : "From WordPress to React",
    title             : "Building on Existing Experience",
    text              :
    [
      "My previous experience developing dealership websites in WordPress gave me a strong foundation for approaching this project.",
      "Having already built a Mazda dealership template using HTML, CSS and WordPress, I was familiar with the structure, content and functionality required for this type of website. This allowed me to focus on learning how to implement those same concepts using React.",
      "Rather than starting with a completely unfamiliar project, I could apply my existing frontend and design knowledge while learning a new way of structuring and developing the application."
    ]
  },


  architecture  : {
    bgClass           : "",
    wrapperClass      : "std-wrapper",
    gridClass         : "grid-d-two-cols gv-center",
    titleEyebrow      : "Component Architecture",
    title             : "Built to Scale",
    text              :
    [
      "Coming from a traditional HTML and CSS workflow, React introduced a different approach to structuring a website. Instead of building each section directly into a page, I could break the interface into reusable components and compose them together.",
      "Components such as vehicle cards, sliders, content sections and navigation elements could be created once and reused wherever they were needed.",
      "As the project grew, this approach made the codebase feel much easier to extend and maintain than repeatedly creating the same HTML structures."
    ],
    image             : architectureImg,
    imageAlt          : "Three screenshots Collage of React Demo",
    imageWidth        : "1200",
    imageHeight       : "800" 
  },
  
  dataDriven  : {
    backgroundImage   : "",
    bgClass           : "dark-grey-bg",
    wrapperClass      : "std-wrapper",
    gridClass         : "grid-d-two-cols grid-d-reverse gv-center",
    titleEyebrow      : "Data-Driven Development",
    title             : "Content Meets Components",
    text              :
    [
      "This was my first project where I used JavaScript data to drive the content and components of an entire website.",
      "In my previous work, I was used to building pages directly in HTML, writing the markup and repeating the required classes and structures for each section. I had used JSON data in other projects, but primarily for simple lists such as model names, images, URLs and descriptions.",
      "React introduced a different way of thinking. Instead of creating each piece of content manually, I could define the content in JavaScript data and have reusable components render it dynamically.",
      "I found this approach much more scalable and easier to maintain. Adding new content or changing an existing section no longer meant copying and updating large amounts of HTML. The component could remain the same while the data changed."
    ],
    image             : componentsImg,
    imageAlt          : "Grid Collage of React Demo",
    imageWidth        : "1200",
    imageHeight       : "800" 
  },
  
  dynamicFunction : {
    bgClass           : "",
    wrapperClass      : "std-wrapper",
    gridClass         : "grid-d-two-cols gv-center",
    titleEyebrow      : "Dynamic Functionality",
    title             : "Beyond the Homepage",
    text              :
    [
      "Building the stock section was one of the most valuable parts of the project. My previous work had focused primarily on dealership website templates, so I had limited experience developing the stock search functionality itself.",
      "Using React, I built a dynamic stock page with filtering, sorting and search functionality, along with individual vehicle detail pages.",
      "I was surprised by how naturally React handled this type of interface. Managing the data and UI through components and state made it possible to build a feature-rich stock experience without needing to treat each result or page as a separate piece of markup."
    ],
    image             : beyondImg,
    imageAlt          : "Three image collage of React Demo",
    imageWidth        : "1200",
    imageHeight       : "800" 
  },
  
  gallery : {
    bgClass           : "black-bg",
    wrapperClass      : "",
    titleEyebrow      : "Take a glimpse",
    title             : "Gallery",
    items             :
    [
        {
            id: 1,
            imageOne: galleryImg1,
            imageOneAlt: "React Demo Homepage",
            imageOneWidth: "1024",
            imageOneHeight: "1024",
            imageTwo: galleryImg2,
            imageTwoAlt: "React Demo Homepage featured vehicles section",
            imageTwoWidth: "1024",
            imageTwoHeight: "1024"
        },
        {
            id: 2,
            imageOne: galleryImg3,
            imageOneAlt: "React Demo Vehicle Stock Listings",
            imageOneWidth: "1024",
            imageOneHeight: "1024",
            imageTwo: galleryImg4,
            imageTwoAlt: "React Demo Vehicle Listing Page",
            imageTwoWidth: "1024",
            imageTwoHeight: "1024"
        },  
        {
            id: 3,
            imageOne: galleryImg5,
            imageOneAlt: "Car Menu",
            imageOneWidth: "1024",
            imageOneHeight: "1024",
            imageTwo: galleryImg6,
            imageTwoAlt: "Book a Test Drive",
            imageTwoWidth: "1024",
            imageTwoHeight: "1024"
        },
        {
            id: 4,
            imageOne: galleryImg7,
            imageOneAlt: "React Demo Finance page",
            imageOneWidth: "1024",
            imageOneHeight: "1024",
            imageTwo: galleryImg8,
            imageTwoAlt: "React Demo About page",
            imageTwoWidth: "1024",
            imageTwoHeight: "1024"
        }
    ]
  },

  keySkills : {
    backgroundImage   : gradientBg,
    bgClass           : "dark-grey-bg gradient-bg",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "The Toolkit",
    title             : "Key Skills",
    steps             :
    [

      {
        title         : "React Development",
        description   : "Building a responsive dealership application using React and reusable components.",
        extraClass    : "header-accent"
      },

      {
        title         : "Component Architecture",
        description   : "Creating reusable components that can be composed across different pages and sections.",
        extraClass    : "header-accent"
      },

      {
        title         : "Dynamic Rendering",
        description   : "Using props, arrays and map() to generate reusable, data-driven interfaces.",
        extraClass    : "header-accent"
      },

      {
        title         : "State & Filtering",
        description   : "Managing UI state to build interactive stock search, filtering and sorting functionality.",
        extraClass    : "header-accent"
      },

      {
        title         : "Responsive Development",
        description   : "Applying existing HTML and CSS experience to create responsive React interfaces.",
        extraClass    : "header-accent"
      },

      {
        title         : "React & Vite",
        description   : "Developing a modern frontend application using React with Vite as the development environment.",
        extraClass    : "header-accent"
      }


    ]
  },

  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "Outcome",
    title             : "A Bigger Picture",
    text              :
    [
      "Working with React helped me see frontend development from a broader perspective. Rather than thinking about a website as a collection of individual HTML pages, I started thinking about how data, components and functionality could work together to create a scalable application.",
      "The project showed me how a data-driven approach can reduce repetitive markup, make content easier to maintain and allow new pages and functionality to be added without rebuilding the same structures from scratch.",
      "It also gave me a better understanding of how modern frontend technologies can be used to build fast, responsive and scalable applications, while allowing me to bring my existing web development and design experience into a new technical workflow."
    ]
  },

  livePreview : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "React Demo",
    title             : "Live Preview",
    text              :
    [
      "Get hands on and take a closer look at the finished React dealership demo, or explore the earlier versions to see how the project evolved from its initial component architecture into a fully realised responsive interface."
    ],
    github            : "https://github.com/rebscv/react-dealership-homepage",
    liveSite          : "https://reuvenvergara.com/react-demo/version-3",
    liveSiteBtn       : "View Live Demo",
    image             : livePreviewImg,
    imageAlt          : "Web Browser on top of Mazda MX-5 car on highway",
    imageWidth        : "1920",
    imageHeight       : "1440",
    versions          :
    [

      {
        title         : "Version 1 - Live Demo",
        text          : ["Explore the original version focused on React fundamentals, reusable components and dynamic rendering."],
        image         : websiteVersion3Img,
        link          : "https://reuvenvergara.com/react-demo/version-1",
        linkText      : "Version 1 - View Demo"
      },
      {
        title         : "Version 2 - Live Demo",
        text          : ["See how the project developed with responsive layouts, CSS Grid, Flexbox, spacing and typography."],
        image         : websiteVersion2Img,
        link          : "https://reuvenvergara.com/react-demo/version-2",
        linkText      : "Version 2 - View Demo"
      }
    ]
  }

};

export default reactDealerWebsite;
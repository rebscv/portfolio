import thumbImg               from "../../assets/projects/wordpress-template/thumb.webp";
import featuredImg            from "../../assets/projects/wordpress-template/featured-thumb.webp";
import heroImg                from "../../assets/projects/wordpress-template/bmw-hero.webp"
import heroTabletImg          from "../../assets/projects/wordpress-template/bmw-hero-t.webp"
import heroMobileImg          from "../../assets/projects/wordpress-template/bmw-hero-m.webp"
import logoImg                from "../../assets/projects/wordpress-template/logo.webp"
import summaryImg             from "../../assets/projects/wordpress-template/summary.webp";
import summaryBgImg           from "../../assets/projects/summary-bg.webp";
import pixelImg               from "../../assets/projects/wordpress-template/pixel-perfect.webp";
import readyImg               from "../../assets/projects/wordpress-template/ready-for-use.webp";

import featuredCaseStudyImg   from "../../assets/projects/wordpress-template/featured-case-study.webp"

import bmwLogoImg             from "../../assets/projects/wordpress-template/bmw-logo.webp"
import bmwGalleryImg1         from "../../assets/projects/wordpress-template/bmw-gallery-1.webp"
import bmwGalleryImg2         from "../../assets/projects/wordpress-template/bmw-gallery-2.webp"
import bmwGalleryImg3         from "../../assets/projects/wordpress-template/bmw-gallery-3.webp"

import mazdaLogoImg           from "../../assets/projects/wordpress-template/mazda-logo.webp"
import mazdaImg               from "../../assets/projects/wordpress-template/mazda-gallery-thumb.webp"
import mazdaGalleryImg1       from "../../assets/projects/wordpress-template/mazda-gallery-1.webp"
import mazdaGalleryImg2       from "../../assets/projects/wordpress-template/mazda-gallery-2.webp"
import mazdaGalleryImg3       from "../../assets/projects/wordpress-template/mazda-gallery-3.webp"

import fordLogoImg            from "../../assets/projects/wordpress-template/ford-logo.webp"
import fordGalleryImg         from "../../assets/projects/wordpress-template/ford-gallery-thumb.webp"
import fordGalleryImg1        from "../../assets/projects/wordpress-template/ford-gallery-1.webp"
import fordGalleryImg2        from "../../assets/projects/wordpress-template/ford-gallery-2.webp"
import fordGalleryImg3        from "../../assets/projects/wordpress-template/ford-gallery-3.webp"

import xpengLogoImg           from "../../assets/projects/wordpress-template/xpeng-logo.webp"
import xpengGalleryImg        from "../../assets/projects/wordpress-template/xpeng-gallery-thumb.webp"
import xpengGalleryImg1       from "../../assets/projects/wordpress-template/xpeng-gallery-1.webp"
import xpengGalleryImg2       from "../../assets/projects/wordpress-template/xpeng-gallery-2.webp"
import xpengGalleryImg3       from "../../assets/projects/wordpress-template/xpeng-gallery-3.webp"

import forthingLogoImg        from "../../assets/projects/wordpress-template/forthing-logo.webp"
import forthingGalleryImg     from "../../assets/projects/wordpress-template/forthing-gallery-thumb.webp"
import forthingGalleryImg1    from "../../assets/projects/wordpress-template/forthing-gallery-1.webp"
import forthingGalleryImg2    from "../../assets/projects/wordpress-template/forthing-gallery-2.webp"
import forthingGalleryImg3    from "../../assets/projects/wordpress-template/forthing-gallery-3.webp"

import fotonLogoImg           from "../../assets/projects/wordpress-template/foton-logo.webp"
import fotonGalleryImg        from "../../assets/projects/wordpress-template/foton-gallery-thumb.webp"
import fotonGalleryImg1       from "../../assets/projects/wordpress-template/foton-gallery-1.webp"
import fotonGalleryImg2       from "../../assets/projects/wordpress-template/foton-gallery-2.webp"
import fotonGalleryImg3       from "../../assets/projects/wordpress-template/foton-gallery-3.webp"


import { image, p, text, title } from "framer-motion/client";
import { steps } from "framer-motion";


const wordpressTemplate = {
  id                : 2,
  slug              : "wordpress-templates",
  title             : "WordPress Template Development",
  subtitle          : "BMW | Ford | FOTON  | Mazda | XPENG",
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
    },
    {
      type      : "process",
      data      : "process"
    },
    {
      type      : "textColumnBlock",
      data      : "pixelPerfect"
    },
    {
      type      : "textColumnBlock",
      data      : "architecture"
    },
    {
      type      : "galleryFancy",
      data      : "implementations"
    },
    {
      type      : "process",
      data      : "keySkills"
    },
    {
      type      : "textBlock",
      data      : "outcome"
    }
  ],

  hero: {
    image         : heroImg,
    imageTablet  : heroTabletImg,
    imageMobile   : heroMobileImg,
    title         : "WordPress Template Development",
    subtitle      : "Design to reusable WordPress themes",
    metadata          :
    {
      role            : "Frontend Developer",
      projectType     : "Commercial",
      year            : "2021 - Present",
      focus           : "Theme Development / Front End Development",
      projects        : "BMW, Ford ZA, Foton ZA, Mazda NZ, XPENG",        
      platform        : "WordPress",
      design          : "Figma & Illustrator / Provided Design"
    }
  },

  summary : {
    bgClass           : "",
    backgroundImage   : summaryBgImg,
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From Design to Development",
    text              :
    [
      "These dealership websites were developed using a shared WordPress foundation, allowing new brand websites to be built from an established starting point rather than from scratch.",
      "Each project began with a blank WordPress installation containing placeholder content and the core dealership page structure. Designs were supplied in Figma, which I translated into responsive WordPress templates with a strong focus on pixel-accurate implementation.",
      "The result was a collection of brand-specific websites built on a consistent technical foundation while allowing each design to retain its own visual identity."
    ],
    image             : summaryImg
  },

  
  process : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "The Process",
    title             : "Take it Step by Step",
    steps             :
    [
      {
        number        : "01",
        title         : "Design",
        description   : [        
          "The visual design was provided in Figma.",
          "I worked from the supplied layouts, typography, spacing, imagery and component designs to establish the structure and styling required for the WordPress implementation."
        ]
      },
      {
        number        : "02",
        title         : "WordPress Foundation",
        description   : [
          "Each project started from a base WordPress installation containing placeholder pages and content.",
          "This provided the underlying structure while keeping the site free from brand-specific content."
        ]
      },
      {
        number        : "03",
        title         : "Theme Development",
        description   : "I translated the Figma design into the WordPress theme, developing the required templates, components and responsive layouts."
      },
      {
        number        : "04",
        title         : "Responsive Development",
        description   : "Desktop and mobile designs were translated into responsive layouts, ensuring the design remained consistent across different screen sizes."
      },
      {
        number        : "05",
        title         : "Reusable Structure",
        description   : "The underlying approach allowed common dealership functionality and layouts to be reused while adapting the visual implementation for each individual brand."
      }
    ]
  },

  pixelPerfect  : {
    bgClass           : "dark-grey-bg",
    wrapperClass      : "lrg-wrapper no-padding-bottom",
    gridClass         : "grid-d-two-cols gv-center",
    titleEyebrow      : "Pixel-Perfect Implementation",
    title             : "The Extra Step",
    text              :
    [
      "These dealership websites were developed using a shared WordPress foundation, allowing new brand websites to be built from an established starting point rather than from scratch.",
      "Each project began with a blank WordPress installation containing placeholder content and the core dealership page structure. Designs were supplied in Figma, which I translated into responsive WordPress templates with a strong focus on pixel-accurate implementation.",
      "The result was a collection of brand-specific websites built on a consistent technical foundation while allowing each design to retain its own visual identity."
    ],
    image             : pixelImg,
  },

  architecture  : {
    bgClass           : "dark-grey-bg",
    wrapperClass      : "lrg-wrapper no-padding-top",
    gridClass         : "grid-d-two-cols grid-d-reverse gv-center",
    titleEyebrow      : "Reusable Architecture",
    title             : "Ready for Use",
    text              :
    [
      "Although each site had its own visual design, the projects were built around a common WordPress foundation. This allowed recurring dealership structures and functionality to be reused while individual themes could be styled and adapted for each brand."
    ],
    image             : readyImg
  },

  implementations : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "Take a Glimpse",
    title             : "Gallery",
    items             :
    [
      {
        id                : "1",
        brand             : "BMW",
        projectCardTitle  : "BMW AU Dealership Template",
        brandImg          : featuredImg,
        brandLogo         : bmwLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : bmwGalleryImg1
          },
          {
            id            : "2",
            image         : bmwGalleryImg2
          },
          {
            id            : "3",
            image         : bmwGalleryImg3
          }
        ]
      },

      {
        id                : "2",
        brand             : "Mazda",
        projectCardTitle  : "Mazda NZ Dealership Template",
        brandImg          : mazdaImg,
        brandLogo         : mazdaLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : mazdaGalleryImg1
          },
          {
            id            : "2",
            image         : mazdaGalleryImg2
          },
          {
            id            : "3",
            image         : mazdaGalleryImg3
          }
        ]
      },

      {
        id                : "3",
        brand             : "Ford",
        projectCardTitle  : "Ford ZA Dealership Template",
        brandImg          : fordGalleryImg,
        brandLogo         : fordLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : fordGalleryImg1
          },
          {
            id            : "2",
            image         : fordGalleryImg2
          },
          {
            id            : "3",
            image         : fordGalleryImg3
          }
        ]
      },

      {
        id                : "4",
        brand             : "XPENG",
        projectCardTitle  : "XPENG AU Dealership Template",
        brandImg          : xpengGalleryImg,
        brandLogo         : xpengLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : xpengGalleryImg1
          },
          {
            id            : "2",
            image         : xpengGalleryImg2
          },
          {
            id            : "3",
            image         : xpengGalleryImg3
          }
        ]
      },

      {
        id                : "5",
        brand             : "Forthing",
        projectCardTitle  : "Forthing NZ Dealership Template",
        brandImg          : forthingGalleryImg,
        brandLogo         : forthingLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : forthingGalleryImg1
          },
          {
            id            : "2",
            image         : forthingGalleryImg2
          },
          {
            id            : "3",
            image         : forthingGalleryImg3
          }
        ]
      },

      {
        id                : "6",
        brand             : "Foton",
        projectCardTitle  : "Foton ZA Dealership Template",
        brandImg          : fotonGalleryImg,
        brandLogo         : fotonLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : fotonGalleryImg1
          },
          {
            id            : "2",
            image         : fotonGalleryImg2
          },
          {
            id            : "3",
            image         : fotonGalleryImg3
          }
        ]
      }
      
    ]
  },

  keySkills : {
    bgClass           : "dark-grey-bg",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "The Toolkit",
    title             : "Key Skills",
    steps             :
    [
      {
        title         : "WordPress Theme Development",
        description   : ["Building and adapting WordPress themes from a shared foundation."]
      },
      {
        title         : "Figma → Code",
        description   : ["Translating supplied visual designs into accurate front-end implementations."]
      },
      {
        title         : "Responsive Development",
        description   : ["Building layouts that adapt across desktop, tablet and mobile."]
      },
      {
        title         : "HTML & CSS",
        description   : ["Developing structured, maintainable front-end layouts."]
      },
      {
        title         : "Reusable Components",
        description   : ["Creating common structures that could be reused across dealership websites."]
      },
      {
        title         : "Pixel-Accurate Implementation",
        description   : ["Matching spacing, typography, layout and visual details to the supplied designs."]
      }
    ]
  },

  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "",
    title             : "Outcome",
    text              : "The process provided a repeatable approach for turning dealership designs into fully implemented WordPress websites. By starting from a shared foundation, new brand sites could be developed more efficiently while still maintaining the unique visual identity of each manufacturer."
  }

};

export default wordpressTemplate;
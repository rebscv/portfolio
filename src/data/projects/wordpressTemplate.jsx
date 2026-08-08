import thumbImg               from "../../assets/projects/wordpress-template/thumb.webp";
import featuredImg            from "../../assets/projects/wordpress-template/featured-thumb.webp";
import heroImg                from "../../assets/projects/wordpress-template/hero.webp"
import heroMobileImg          from "../../assets/projects/wordpress-template/hero-m.webp"
import logoImg                from "../../assets/projects/wordpress-template/logo.webp"
import featuredCaseStudyImg   from "../../assets/projects/wordpress-template/featured-case-study.webp"
import { image, text, title } from "framer-motion/client";
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
      type      : "textBlock",
      data      : "overview"
    },
    {
      type      : "process",
      data      : "process"
    },
    {
      type      : "textBlock",
      data      : "pixelPerfect"
    },
    {
      type      : "textBlock",
      data      : "architecture"
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
    imageMobile   : heroMobileImg,
    title         : "WordPress Template Development",
    subtitle      : "Design to reusable WordPress themes"
  },

  summary : {
    bgClass           : "",
    wrapperClass      : "std-wrapper",
    metadata          :
    {
      focus           : "Theme Development / Front End Development",
      projects        : "BMW, Ford ZA, Foton ZA, Mazda NZ, XPENG",
      role            : "Frontend Developer",
      platform        : "WordPress",
      design          : "Figma"

    },
    github            : "",
    liveSite          : "",
    image             : thumbImg
  },

  overview : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From Design to Development",
    text              :
    [
      "These dealership websites were developed using a shared WordPress foundation, allowing new brand websites to be built from an established starting point rather than from scratch.",
      "Each project began with a blank WordPress installation containing placeholder content and the core dealership page structure. Designs were supplied in Figma, which I translated into responsive WordPress templates with a strong focus on pixel-accurate implementation.",
      "The result was a collection of brand-specific websites built on a consistent technical foundation while allowing each design to retain its own visual identity."
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
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "Pixel-Perfect Implementation",
    title             : "The Extra Step",
    text              :
    [
      "These dealership websites were developed using a shared WordPress foundation, allowing new brand websites to be built from an established starting point rather than from scratch.",
      "Each project began with a blank WordPress installation containing placeholder content and the core dealership page structure. Designs were supplied in Figma, which I translated into responsive WordPress templates with a strong focus on pixel-accurate implementation.",
      "The result was a collection of brand-specific websites built on a consistent technical foundation while allowing each design to retain its own visual identity."
    ]
  },

  architecture  : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper no-padding-top",
    titleEyebrow      : "Reusable Architecture",
    title             : "Ready for Use",
    text              :
    [
      "Although each site had its own visual design, the projects were built around a common WordPress foundation. This allowed recurring dealership structures and functionality to be reused while individual themes could be styled and adapted for each brand."
    ]
  },

  keySkills : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
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
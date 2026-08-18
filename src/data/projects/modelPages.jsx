import thumbImg                     from "../../assets/projects/model-pages/thumb.webp";
import heroImg                      from "../../assets/projects/model-pages/hero.webp"
import heroMobileImg                from "../../assets/projects/model-pages/hero-m.webp"

const modelPages = {
  id                : 3,
  slug              : "model-pages",
  title             : "Vehicle Model Range Implementation",
  subtitle          : "Ford | FOTON | XPENG",
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",

  featureTagline    : "Cricks Noosa Nissan",
  featureTitle      : "WordPress Website Migration & Development",
  logo              : "",

  overview          : "A fully responsive dealership website showcasing reusable React components, routing, animations, responsive layouts and modern frontend development practices.",
  github            : "",
  liveSite          : "",

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
    }
  ],

  hero: {
    image         : heroImg,
    imageMobile   : heroMobileImg,
    imageAlt      : "Mazda",
    title         : "Model Range Creation",
    subtitle      : "Development"
  },

  summary : {
    bgClass           : "",
    wrapperClass      : "std-wrapper",
    metadata          :
    {
      role            : "Frontend Developer",
      projectType     : "Website Development",
      year            : "Multiple Projects",
      focus           : "Front End Development / Model Range Implementation",
      projects        : "Ford | FOTON | XPENG",
      platform        : "WordPress",
      design          : "Provided OEM Designs / Existing Website Templates"
    },
    technologies      : [ "HTML", "CSS", "JavaScript", "WordPress"],
    github            : "",
    liveSite          : "",
    image             : thumbImg
  },

  overview : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From a single model design to a complete vehicle range",
    text              :
    [
      "Vehicle model pages are a core part of automotive websites, with each model requiring its own content, imagery, specifications and features. In many projects, I was provided with the design for a single model page. I built the initial implementation, established the page structure and functionality, and then used that implementation as the foundation for the rest of the vehicle range."
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
        title       : "Initial Model Implementation",
        description : [
          "Built the first model page from the supplied design, establishing the structure, styling and functionality used across the range."
        ]
      },

      {
        number      : "03",
        title       : "Model Range Implementation",
        description : [
          "Used the initial model as the foundation for building the remaining vehicles, adapting content, imagery and specifications for each model."
        ]
      },

      {
        number      : "04",
        title       : "Interactive Features",
        description : [
          "Implemented interactive components including image sliders, colour pickers and tabbed content as required by the model designs."
        ]
      },

      {
        number      : "05",
        title       : "Model-Specific Content",
        description : [
          "Worked with the varying content and specifications of individual vehicles while maintaining a consistent structure across the model range."
        ]
      },

      {
        number      : "06",
        title       : "New Model Releases",
        description : [
          "Built new model pages when manufacturers introduced new vehicles, integrating them into the existing website structure."
        ]
      },

      {
        number      : "07",
        title       : "Ongoing Model Support",
        description : [
          "Assisted with updating existing model pages as vehicle content, specifications, imagery and other information changed."
        ]
      }

    ]
  },



};

export default modelPages;
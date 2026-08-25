import thumbImg                     from "../../assets/projects/model-pages/thumb.webp";
import heroImg                      from "../../assets/projects/model-pages/hero.webp"
import heroMobileImg                from "../../assets/projects/model-pages/hero-m.webp"
import summaryImg                   from "../../assets/projects/model-pages/summary.webp"
import summaryBgImg                 from "../../assets/projects/summary-bg.webp";
import rangeImg                     from "../../assets/projects/model-pages/range.webp";

import fordLogoImg            from "../../assets/projects/wordpress-template/ford-logo.webp"
import fordGalleryImg         from "../../assets/projects/wordpress-template/ford-gallery-thumb.webp"
import fordGalleryImg1        from "../../assets/projects/model-pages/gallery-4.webp"
import fordGalleryImg2        from "../../assets/projects/model-pages/gallery-5.webp"
import fordGalleryImg3        from "../../assets/projects/wordpress-template/ford-gallery-3.webp"

import xpengLogoImg           from "../../assets/projects/wordpress-template/xpeng-logo.webp"
import xpengGalleryImg        from "../../assets/projects/wordpress-template/xpeng-gallery-thumb.webp"
import xpengGalleryImg1       from "../../assets/projects/model-pages/gallery-1.webp"
import xpengGalleryImg2       from "../../assets/projects/model-pages/gallery-2.webp"
import xpengGalleryImg3       from "../../assets/projects/model-pages/gallery-3.webp"

import forthingLogoImg        from "../../assets/projects/wordpress-template/forthing-logo.webp"
import forthingGalleryImg     from "../../assets/projects/wordpress-template/forthing-gallery-thumb.webp"
import forthingGalleryImg1    from "../../assets/projects/wordpress-template/forthing-gallery-1.webp"
import forthingGalleryImg2    from "../../assets/projects/wordpress-template/forthing-gallery-2.webp"
import forthingGalleryImg3    from "../../assets/projects/wordpress-template/forthing-gallery-3.webp"

import featuredImg            from "../../assets/projects/wordpress-template/featured-thumb.webp";


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
      type      : "process",
      data      : "process"
    },
    {
      type      : "textColumnBlock",
      data      : "modelRange"
    },
    {
      type      : "galleryFancy",
      data      : "gallery"
    },
    {
      type      : "textBlock",
      data      : "outcome"
    }
  ],

  hero: {
    image         : heroImg,
    imageMobile   : heroMobileImg,
    imageAlt      : "Mazda",
    title         : "Model Range Creation",
    subtitle      : "Development",
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
    liveSite          : ""
  },

  summary : {
    bgClass           : "",
    backgroundImage   : summaryBgImg,
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From a single model design to a complete vehicle range",
    text              :
    [
      "Vehicle model pages are a core part of automotive websites, with each model requiring its own content, imagery, specifications and features. In many projects, I was provided with the design for a single model page. I built the initial implementation, established the page structure and functionality, and then used that implementation as the foundation for the rest of the vehicle range."
    ],
    image             : summaryImg

  },

  process : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "Key Contributions",
    title             : "Building model pages for real-world vehicle content",
    steps             :
    [

      {
        number      : "01",
        title       : "Initial Model Implementation",
        description : [
          "Built the first model page from the supplied design, establishing the structure, styling and functionality used across the range."
        ]
      },

      {
        number      : "02",
        title       : "Model Range Implementation",
        description : [
          "Used the initial model as the foundation for building the remaining vehicles, adapting content, imagery and specifications for each model."
        ]
      },

      {
        number      : "03",
        title       : "Interactive Features",
        description : [
          "Implemented interactive components including image sliders, colour pickers and tabbed content as required by the model designs."
        ]
      },

      {
        number      : "04",
        title       : "Model-Specific Content",
        description : [
          "Worked with the varying content and specifications of individual vehicles while maintaining a consistent structure across the model range."
        ]
      },

      {
        number      : "05",
        title       : "New Model Releases",
        description : [
          "Built new model pages when manufacturers introduced new vehicles, integrating them into the existing website structure."
        ]
      },

      {
        number      : "06",
        title       : "Ongoing Model Support",
        description : [
          "Assisted with updating existing model pages as vehicle content, specifications, imagery and other information changed."
        ]
      }

    ]
  },

  modelRange : {
    bgClass           : "dark-grey-bg",
    wrapperClass      : "std-wrapper",
    gridClass         : "grid-d-two-cols gv-center",
    titleEyebrow      : "Model Range Expansion",
    title             : "Expanding the Initial Model Across the Range",
    text              :
    [
      "After receiving the design for the initial model, I built the first model page and established the layout, content structure and overall format. This initial implementation then became the foundation for expanding the rest of the vehicle range, providing a consistent structure and experience across each model.",
      "For the remaining models, I referenced the OEM manufacturer website to research and gather the relevant content, specifications, features and imagery. I then adapted this content to the established model page structure, making adjustments where required while maintaining consistency across the range. This approach allowed me to efficiently expand a single model implementation into a complete range of model pages."
    ],
    image             : rangeImg
  },

  gallery : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "Take a Glimpse",
    title             : "Gallery",
    items             :
    [

      {
        id                : "1",
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
        id                : "2",
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
        id                : "3",
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
      }
      
    ]
  },


  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Outcome",
    title             : "A consistent approach that could scale across the range",
    text              :
    [
      "The result was a repeatable approach to implementing vehicle model pages from a single approved design. Each model could have its own content and interactive requirements while retaining the same underlying structure and visual language. This approach also provided a practical foundation for adding new models as manufacturers expanded or updated their vehicle ranges."
    ]
  }



};

export default modelPages;
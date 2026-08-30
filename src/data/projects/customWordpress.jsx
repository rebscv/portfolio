import thumbImg                     from "../../assets/projects/custom-wordpress/thumb.webp";
import featuredImg                  from "../../assets/projects/custom-wordpress/featured-thumb.webp";
import logoImg                      from "../../assets/projects/custom-wordpress/logo.webp";
import heroImg                      from "../../assets/projects/custom-wordpress/hero.webp"
import heroMobileImg                from "../../assets/projects/custom-wordpress/hero-m.webp"
import summaryBgImg                 from "../../assets/projects/summary-bg.webp";
import summaryImg                   from "../../assets/projects/custom-wordpress/summary.webp";
import galleryImg1                  from "../../assets/projects/custom-wordpress/gallery-1.webp";
import galleryImg2                  from "../../assets/projects/custom-wordpress/gallery-2.webp";
import galleryImg3                  from "../../assets/projects/custom-wordpress/gallery-3.webp";
import galleryImg4                  from "../../assets/projects/custom-wordpress/gallery-4.webp";
import galleryImg5                  from "../../assets/projects/custom-wordpress/gallery-5.webp";
import galleryImg6                  from "../../assets/projects/custom-wordpress/gallery-6.webp";
import fimgmaWordPressImg           from "../../assets/projects/custom-wordpress/fimga-wordpress.webp";


const customWordpress = {
  id                : 4,
  slug              : "custom-wordpress",
  title             : "Custom WordPress Websites",
  subtitle          : "Maserati",
  featured          : true,
  year              : 2026,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",
  logo              : logoImg,

  featuredImg       : featuredImg,
  featureTagline    : "Auckland Maserati",
  featureTitle      : "Figma to WordPress Development",
  logo              : logoImg,

  overview          : "",
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
      data      : "designDevelopement"
    },
    {
      type      : "galleryColumnsSlider",
      data      : "implementationsSlider"
    },
    {
      type      : "textBlock",
      data      : "outcome"
    }
  ],

  hero: {
    image         : heroImg,
    imageMobile   : heroMobileImg,
    title         : "Auckland Maserati Dealership",
    subtitle      : "Figma to WordPress Development",
    metadata          :
    {
      focus           : "Theme Development / Front End Development",
      project         : "Maserati Auckland",
      role            : "Frontend Developer",
      platform        : "WordPress",
      design          : "Figma / Provided Design",
      template        : "Base WordPress Template"
    }
  },

  summary : {
    bgClass           : "",
    backgroundImage   : summaryBgImg,
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "Bringing Maserati Auckland to Life with WordPress",
    text              :
    [
      "The Maserati Auckland website was developed using our existing WordPress base template, with a new Figma design and Maserati brand identity applied across the site. My role involved translating the supplied designs into a responsive, production-ready WordPress implementation while working within the structure and capabilities of the existing template.",
      "The project involved adapting the template's reusable components, layouts, styling, and functionality to create a custom digital experience for Maserati Auckland, while maintaining the flexibility and consistency of the underlying WordPress framework."
    ],
    github            : "",
    liveSite          : "",
    image             : summaryImg
  },

  process : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper t-center",
    titleEyebrow      : "The Process",
    title             : "Take it step by step",
    steps             :
    [
      {
        number: "01",
        title: "Design Review",
        description: ["Reviewed the supplied Figma designs to understand the page structure, visual hierarchy, typography, spacing, imagery, and Maserati Auckland branding requirements."]
      },

      {
        number: "02",
        title: "Template Assessment",
        description: ["Worked from our existing WordPress base template, identifying the reusable components and existing functionality that could be retained, adapted, or extended for the new design."]
      },

      {
        number: "03",
        title: "Frontend Implementation",
        description: ["Translated the Figma designs into responsive WordPress layouts, adapting the template's existing components and styling to match the Maserati Auckland visual direction."]
      },

      {
        number: "04",
        title: "Component Adaptation",
        description: ["Modified and extended reusable template components where required, ensuring the new layouts and content could be managed through WordPress while maintaining the underlying template structure."]
      },

      {
        number: "05",
        title: "Responsive Development",
        description: ["Implemented responsive behaviour across desktop, tablet, and mobile breakpoints, adjusting layouts, typography, spacing, imagery, and component behaviour to maintain the intended design across screen sizes."]
      },

      {
        number: "06",
        title: "Testing & Refinement",
        description: ["Tested the implementation across different screen sizes and browsers, refining visual details and resolving layout issues to ensure the finished site closely matched the supplied designs."]
      }

    ]
  },  

  designDevelopement : {
    bgClass           : "dark-grey-bg",
    wrapperClass      : "lrg-wrapper",
    gridClass         : "grid-d-two-cols d-grid-cols-40-60 gv-center",
    titleEyebrow      : "Implementation",
    title             : "From Figma to WordPress",
    text              :
    [
      "The supplied Figma designs provided the visual direction for the Maserati Auckland website. I translated these designs into the existing WordPress framework, adapting reusable components, layouts, typography, spacing, and responsive behaviour to closely match the approved designs."
    ],
    image             : fimgmaWordPressImg
  },

  implementationsSlider : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "Take a Glimpse",
    title             : "Gallery",
    items             :
    [
        {
            id: 1,
            imageOne: galleryImg1,
            imageTwo: galleryImg2,
        },
        {
            id: 2,
            imageOne: galleryImg3,
            imageTwo: galleryImg4,
        },
        {
            id: 3,
            imageOne: galleryImg5,
            imageTwo: galleryImg6
        }
    ]
  },

  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Outcome",
    title             : "Built for the Team That Comes Next",
    text              :
    [
      "The Maserati Auckland website demonstrates my ability to take an established WordPress foundation and adapt it to a new brand and design direction while maintaining the structure and conventions of the underlying platform.",
      "A key consideration throughout the project was that the website would be maintained by our support team rather than the development team. With this in mind, the content structure and frontend code were kept clear, consistent, and easy to understand, making it straightforward for the team to manage existing content and add new content as required.",
      "The result is a production-ready WordPress website that not only reflects the supplied Maserati Auckland design but also remains practical to maintain, extend, and support within an existing development workflow."
    ]
  }

};

export default customWordpress;
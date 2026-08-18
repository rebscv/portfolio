import thumbImg           from "../../assets/projects/cms-migration/thumb.webp";
import featuredImg        from "../../assets/projects/cms-migration/featured-thumb.webp";
import heroImg            from "../../assets/projects/cms-migration/hero.webp"
import heroMobileImg      from "../../assets/projects/cms-migration/hero-m.webp"
import logoImg            from "../../assets/projects/cms-migration/logo.webp"

const cmsMigration = {
  id                : 5,
  slug              : "cms-migration",
  title             : "CMS Migration & Platform Upgrades",
  subtitle          : "Mitsubishi | Toyota | Nissan | Škoda | Volkswagen",
  featured          : true,
  thumbnail         : thumbImg,
  heroImage         : "",
  platform          : "WordPress",

  featuredImg       : featuredImg,
  featureTagline    : "CMS Migration",
  featureTitle      : "WordPress Website Migration & Development",
  logo              : logoImg,

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
    },
    {
      type      : "textBlock",
      data      : "migration"
    },
    {
      type      : "gallerySlider",
      data      : "gallerySlider"
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
    title         : "CMS Migration",
    subtitle      : "WordPress Website Migration & Development"
  },

  summary : {
    bgClass           : "",
    wrapperClass      : "std-wrapper",
    metadata          :
    {
      focus           : "CMS Migration / WordPress Development",
      projects        : "Toyota, Mitsubishi, Nissan, Škoda, Volkswagen",
      role            : "Frontend Developer",
      platform        : "WordPress",
      migration       : "Dealership Content & Site Migration"
    },
    github            : "",
    liveSite          : "",
    image             : thumbImg
  },

  overview : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From Joomla to WordPress",
    text              :
    [
      "As part of a broader platform upgrade, dealership websites across multiple automotive brands were migrated from Joomla to WordPress.",
      "Brand-specific WordPress templates were developed first, providing a new foundation for each dealership. The existing Joomla websites were then reviewed and migrated into these templates, carrying across dealership-specific content such as locations, contact details, About Us information, offers and promotions.",
      "At the same time, updated OEM content was introduced across areas such as Service and Finance. The challenge was to bring this new content into the WordPress structure while retaining the dealership-specific information and context of the original site."
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
        number: "01",
        title: "Review the Existing Joomla Site",
        description: [
          "Each dealership's existing Joomla website was reviewed before migration to understand its content, structure and dealership-specific requirements.",
          "This included identifying content that needed to be retained, updated or replaced as part of the move to WordPress."
        ]
      },

      {
        number: "02",
        title: "Map Content to the New Template",
        description: [
          "The existing site content was mapped against the new WordPress brand template to determine where each page and content area would sit within the new structure.",
          "This helped maintain the dealership's existing information while adapting it to the new platform."
        ]
      },

      {
        number: "03",
        title: "Migrate Dealership-Specific Content",
        description: [
          "Important local content was carried across from the Joomla site, including:",
          "Dealership location and contact details",
          "About Us information",
          "Dealership-specific pages and messaging",
          "Localised content",
          "Offers and promotions",
          "The goal was to preserve the information that made each dealership website unique."
        ]
      },

      {
        number: "04",
        title: "Integrate Updated OEM Content",
        description: [
          "Updated content from the relevant OEM/manufacturer website was incorporated into the new WordPress site.",
          "Areas such as Service and Finance often contained updated manufacturer content that needed to replace or supplement the existing Joomla content.",
          "This required reviewing the new content and adapting it to work within the dealership's existing site structure."
        ]
      },

      {
        number: "05",
        title: "Carry Across Offers & Promotions",
        description: [
          "Existing offers and promotional content were reviewed and migrated where appropriate, ensuring active dealership campaigns and commercial messaging weren't lost during the platform transition."
        ]
      },

      {
        number: "06",
        title: "Review & QA",
        description: [
          "The completed WordPress site was compared against the original Joomla website to ensure important dealership information had been retained and the migrated content was correctly presented within the new template.",
          "This included reviewing page content, contact information, offers, imagery and responsive layouts across desktop and mobile."
        ]
      }

    ]
  },

  migration : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Content Migration",
    title             : "Retaining What Matters, Updating What Doesn't",
    text              :
    [
      "Migrating each dealership wasn't simply a matter of copying content from Joomla into WordPress. Existing dealership-specific information needed to be retained while outdated content was replaced with the latest OEM-approved information.",
      "Location details, contact information, About Us content, offers and promotions were carried across from the original dealership websites. At the same time, areas such as Service and Finance were updated using current content from the relevant manufacturer website.",
      "Each piece of content was reviewed and adapted to fit the new WordPress template, ensuring the finished site maintained the dealership's local identity while aligning with the latest brand and product information."
    ]
  },

  gallerySlider : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "Implementation",
    title             : "Explore the builds",
    items             :
    [
        {
            id: 1,
            image: heroImg,
        },
        {
            id: 2,
            image: heroImg,
        }
    ]
  },

  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Outcome",
    title             : "A More Flexible Platform for Future Development",
    text              :
    [
      "The migration moved the dealerships from Joomla onto a more flexible WordPress platform, providing greater scope for custom content and future development.",
      "While the existing dealership information was retained, the new sites also incorporated updated OEM content and a refreshed website structure. Moving to WordPress provided a stronger foundation for creating more customised content and functionality as the needs of each dealership evolved.",
      "From a development perspective, the project demonstrated the importance of balancing the requirements of a platform migration with the opportunity to improve the website itself, rather than simply recreating the existing site in a new CMS."
    ]
  }

};

export default cmsMigration;
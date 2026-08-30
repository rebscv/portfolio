import thumbImg           from "../../assets/projects/cms-migration/thumb.webp";
import featuredImg        from "../../assets/projects/cms-migration/featured-thumb.webp";;
import heroImg            from "../../assets/projects/cms-migration/hero.webp";
import heroMobileImg      from "../../assets/projects/cms-migration/hero-m.webp";
import logoImg            from "../../assets/projects/cms-migration/logo.webp";
import summaryImg         from "../../assets/projects/cms-migration/summary.webp";
import summaryBgImg       from "../../assets/projects/summary-bg.webp";
import migrationImg       from "../../assets/projects/cms-migration/migration.webp";
import mitsGalleryImg1        from "../../assets/projects/cms-migration/gallery-mitsubishi-1.webp";
import mitsGalleryImg2        from "../../assets/projects/cms-migration/gallery-mitsubishi-2.webp";
import mitsGalleryImg3        from "../../assets/projects/cms-migration/gallery-mitsubishi-3.webp";
import mitsGalleryImg4        from "../../assets/projects/cms-migration/gallery-mitsubishi-4.webp";

import nissanLogoImg          from "../../assets/projects/cms-migration/nissan-logo.webp";
import nissanGalleryThumb     from "../../assets/projects/cms-migration/gallery-nissan-thumb.webp";
import nissanGalleryImg1      from "../../assets/projects/cms-migration/gallery-nissan-1.webp";
import nissanGalleryImg2      from "../../assets/projects/cms-migration/gallery-nissan-2.webp";
import nissanGalleryImg3      from "../../assets/projects/cms-migration/gallery-nissan-3.webp";
import nissanGalleryImg4      from "../../assets/projects/cms-migration/gallery-nissan-4.webp";
import nissanGalleryImg5      from "../../assets/projects/cms-migration/gallery-nissan-5.webp";

import skodaLogoImg          from "../../assets/projects/cms-migration/skoda-logo.webp";
import skodaGalleryThumb     from "../../assets/projects/cms-migration/gallery-skoda-thumb.webp";
import skodaGalleryImg1      from "../../assets/projects/cms-migration/gallery-skoda-1.webp";
import skodaGalleryImg2      from "../../assets/projects/cms-migration/gallery-skoda-2.webp";
import skodaGalleryImg3      from "../../assets/projects/cms-migration/gallery-skoda-3.webp";
import skodaGalleryImg4      from "../../assets/projects/cms-migration/gallery-skoda-4.webp";
import skodaGalleryImg5      from "../../assets/projects/cms-migration/gallery-skoda-5.webp";

import toyotaLogoImg          from "../../assets/projects/cms-migration/toyota-logo.webp";
import toyotaGalleryThumb     from "../../assets/projects/cms-migration/gallery-toyota-thumb.webp";
import toyotaGalleryImg1      from "../../assets/projects/cms-migration/gallery-toyota-1.webp";
import toyotaGalleryImg2      from "../../assets/projects/cms-migration/gallery-toyota-2.webp";
import toyotaGalleryImg3      from "../../assets/projects/cms-migration/gallery-toyota-3.webp";
import toyotaGalleryImg4      from "../../assets/projects/cms-migration/gallery-toyota-4.webp";
import toyotaGalleryImg5      from "../../assets/projects/cms-migration/gallery-toyota-5.webp";

import vwLogoImg          from "../../assets/projects/cms-migration/vw-logo.webp";
import vwGalleryThumb     from "../../assets/projects/cms-migration/gallery-vw-thumb.webp";
import vwGalleryImg1      from "../../assets/projects/cms-migration/gallery-vw-1.webp";
import vwGalleryImg2      from "../../assets/projects/cms-migration/gallery-vw-2.webp";
import vwGalleryImg3      from "../../assets/projects/cms-migration/gallery-vw-3.webp";
import vwGalleryImg4      from "../../assets/projects/cms-migration/gallery-vw-4.webp";
import vwGalleryImg5      from "../../assets/projects/cms-migration/gallery-vw-5.webp";

import bmwLogoImg             from "../../assets/projects/wordpress-template/bmw-logo.webp"
import bmwGalleryThumb        from "../../assets/projects/wordpress-template/featured-thumb.webp";
import bmwGalleryImg1         from "../../assets/projects/wordpress-template/bmw-gallery-1.webp"
import bmwGalleryImg2         from "../../assets/projects/wordpress-template/bmw-gallery-2.webp"
import bmwGalleryImg3         from "../../assets/projects/wordpress-template/bmw-gallery-3.webp"
import { image } from "framer-motion/client";

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
      type      : "process",
      data      : "process"
    },
    {
      type      : "textColumnBlock",
      data      : "migration"
    },
    {
      type      : "galleryFancy",
      data      : "implementations"
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
    subtitle      : "WordPress Website Migration & Development",
    metadata          :
    {
      focus           : "CMS Migration / WordPress Development",
      projects        : "Toyota, Mitsubishi, Nissan, Škoda, Volkswagen",
      role            : "Frontend Developer",
      platform        : "WordPress",
      migration       : "Dealership Content & Site Migration"
    },
    github            : "",
    liveSite          : ""
  },

  summary : {
    bgClass           : "",
    backgroundImage   : summaryBgImg,
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Overview",
    title             : "From Joomla to WordPress",
    image             : summaryImg,
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
    bgClass           : "dark-grey-bg",
    wrapperClass      : "std-wrapper",
    gridClass         : "grid-d-two-cols gv-center",
    titleEyebrow      : "Content Migration",
    title             : "Retaining What Matters, Updating What Doesn't",
    text              :
    [
      "Migrating each dealership wasn't simply a matter of copying content from Joomla into WordPress. Existing dealership-specific information needed to be retained while outdated content was replaced with the latest OEM-approved information.",
      "Location details, contact information, About Us content, offers and promotions were carried across from the original dealership websites. At the same time, areas such as Service and Finance were updated using current content from the relevant manufacturer website.",
      "Each piece of content was reviewed and adapted to fit the new WordPress template, ensuring the finished site maintained the dealership's local identity while aligning with the latest brand and product information."
    ],
    image             : migrationImg
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
        brand             : "Mitsubishi",
        projectCardTitle  : "Chadstone Mitsubishi Dealership",
        brandImg          : featuredImg,
        brandLogo         : logoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : mitsGalleryImg1
          },
          {
            id            : "2",
            image         : mitsGalleryImg2
          },
          {
            id            : "3",
            image         : mitsGalleryImg3
          },
          {
            id            : "4",
            image         : mitsGalleryImg4
          }
        ]
      },
      {
        id                : "2",
        brand             : "Nissan",
        projectCardTitle  : "Cricks Noosa Nissan",
        brandImg          : nissanGalleryThumb,
        brandLogo         : nissanLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : nissanGalleryImg1
          },
          {
            id            : "2",
            image         : nissanGalleryImg2
          },
          {
            id            : "3",
            image         : nissanGalleryImg3
          },
          {
            id            : "4",
            image         : nissanGalleryImg4
          },
          {
            id            : "5",
            image         : nissanGalleryImg5
          }
        ]
      },
      {
        id                : "3",
        brand             : "Škoda",
        projectCardTitle  : "Cricks Noosa Škoda ",
        brandImg          : skodaGalleryThumb,
        brandLogo         : skodaLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : skodaGalleryImg1
          },
          {
            id            : "2",
            image         : skodaGalleryImg2
          },
          {
            id            : "3",
            image         : skodaGalleryImg3
          },
          {
            id            : "4",
            image         : skodaGalleryImg4
          },
          {
            id            : "5",
            image         : skodaGalleryImg5
          }
        ]
      },
      {
        id                : "4",
        brand             : "Toyota",
        projectCardTitle  : "Hurstville Toyota",
        brandImg          : toyotaGalleryThumb,
        brandLogo         : toyotaLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : toyotaGalleryImg1
          },
          {
            id            : "2",
            image         : toyotaGalleryImg2
          },
          {
            id            : "3",
            image         : toyotaGalleryImg3
          },
          {
            id            : "4",
            image         : toyotaGalleryImg4
          },
          {
            id            : "5",
            image         : toyotaGalleryImg5
          }
        ]
      },
      {
        id                : "5",
        brand             : "Volkswagen",
        projectCardTitle  : "Moss Vale Volkswagen",
        brandImg          : vwGalleryThumb,
        brandLogo         : vwLogoImg,
        gridColumns       : "",
        gallery           : 
        [
          {
            id            : "1",
            image         : vwGalleryImg1
          },
          {
            id            : "2",
            image         : vwGalleryImg2
          },
          {
            id            : "3",
            image         : vwGalleryImg3
          },
          {
            id            : "4",
            image         : vwGalleryImg4
          },
          {
            id            : "5",
            image         : vwGalleryImg5
          }
        ]
      },
      {
        id                : "6",
        brand             : "BMW",
        projectCardTitle  : "Mildura BMW",
        brandImg          : bmwGalleryThumb,
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
      }
      
    ]
  },

  outcome : {
    bgClass           : "dark-grey-bg",
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
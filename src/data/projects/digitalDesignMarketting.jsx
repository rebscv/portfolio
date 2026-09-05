
import thumbImg           from "../../assets/projects/digital-design/thumb.webp";
import heroImg            from "../../assets/projects/digital-design/digital-hero.webp"
import heroTabletImg      from "../../assets/projects/digital-design/digital-hero-t.webp"
import heroMobileImg      from "../../assets/projects/digital-design/digital-hero-m.webp"
import summaryBgImg       from "../../assets/projects/summary-bg.webp";

import galleryImg1        from "../../assets/projects/digital-design/gallery-1.webp";
import salesGalleryImg1   from "../../assets/projects/digital-design/gallery-sales-1.webp";
import salesGalleryImg2   from "../../assets/projects/digital-design/gallery-sales-2.webp";
import salesGalleryImg3   from "../../assets/projects/digital-design/gallery-sales-3.webp";
import salesGalleryImg4   from "../../assets/projects/digital-design/gallery-sales-4.webp";
import msGalleryImg1      from "../../assets/projects/digital-design/gallery-microsoft-1.webp";
import msGalleryImg2      from "../../assets/projects/digital-design/gallery-microsoft-2.webp";
import epicGalleryImg1    from "../../assets/projects/digital-design/gallery-epic-1.webp";
import intelGalleryImg1   from "../../assets/projects/digital-design/gallery-intel-1.webp";
import intelGalleryImg2   from "../../assets/projects/digital-design/gallery-intel-2.webp";
import intelGalleryImg3   from "../../assets/projects/digital-design/gallery-intel-3.webp";



const digitalDesignMarketting = {

  id                : 4,
  id                : 6,
  slug              : "digital-design",

  title             : "Digital Design & Marketing",
  subtitle          : "Gaming PCs | PC Hardware | Software",

  featured: false,

  thumbnail: thumbImg,
  heroImage: heroImg,

  description: "This case study is currently being documented.",

  github: "",
  liveSite: "",

  featuredCaseStudy: false,
  caseStudyHero: "",
  caseStudyText: "",

  sections: [
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
      data      : "work"
    },
    {
      type      : "gallerySlider",
      data      : "gallery"
    },
    {
      type      : "textBlock",
      data      : "outcome"
    }
  ],

  hero: {
    image             : heroImg,
    imageTablet       : heroTabletImg,
    imageMobile       : heroMobileImg,
    imageAlt          : "Mazda",
    subtitle          : "Computer & IT retailer",
    title             : "Digital Design & Marketing",
    metadata          :
    {
      focus           : "Digital Design / Content & Marketing",
      projects        : "Gaming PCs, PC Hardware, Software & Brand Promotions",
      role            : "Digital Designer & Content Creator",
      platform        : "Web / Social Media / Email / Print",
      design          : "Photoshop & Illustrator"
    }
  },

  summary : {
    bgClass           : "",
    backgroundImage   : summaryBgImg, 
    wrapperClass      : "std-wrapper",
    titleEyebrow      : "Overview",
    title             : "Design, Content & Marketing",
    text              :
    [
      "A hands-on digital design and marketing role supporting the promotion of gaming PCs, PC hardware and software across digital, social, email, print and retail channels.",
      "The work covered a wide range of day-to-day content, from creating promotional EDMs, web banners and landing pages to producing daily Facebook and Instagram content, photographing custom-built gaming PCs and preparing artwork for in-store signage and print.",
      "I also supported brand-specific campaigns by creating Proof of Execution (POE) reports, documenting how promotional assets were delivered across channels including web, social, email and landing pages.",
      "Working across so many different formats meant adapting content for different platforms while keeping the brand, product and promotional message consistent."
    ],
    image             : thumbImg
  },

  work : {
    bgClass           : "dark-grey-bg",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Selected Work",
    title             : "A Mix of Digital, Social & Print",
    text              :
    [
      "A selection of digital, social, photography, print and retail work created across a range of promotional campaigns. From everyday product content to larger brand promotions, each piece was created with a focus on presenting products clearly and keeping the overall campaign consistent across different channels."
    ]
  },

  gallery : {
    bgClass           : "",
    wrapperClass      : "",
    titleEyebrow      : "Implementation",
    title             : "Explore the builds",
    items             :
    [
        {
            id: 1,
            image: galleryImg1,
        },
        {
            id: 2,
            image: salesGalleryImg1,
        },
        {
            id: 3,
            image: salesGalleryImg2,
        },
        {
            id: 4,
            image: salesGalleryImg3,
        },
        {
            id: 5,
            image: salesGalleryImg4,
        },
        {
            id: 6,
            image: msGalleryImg1,
        },
        {
            id: 7,
            image: msGalleryImg2,
        },
        {
            id: 8,
            image: epicGalleryImg1,
        },
        {
            id: 9,
            image: intelGalleryImg1,
        },
        {
            id: 10,
            image: intelGalleryImg2,
        },
        {
            id: 11,
            image: intelGalleryImg3,
        }
    ]
  },

  outcome : {
    bgClass           : "",
    wrapperClass      : "sml-wrapper",
    titleEyebrow      : "Outcome",
    title             : "Room to Experiment",
    text              :
    [
      "Working across so many different formats kept the creative work varied and gave me plenty of room to experiment, especially when finding new ways to promote our custom gaming PCs.",
      "Working with major brands also taught me a lot about industry guidelines and standards, and how to balance creative ideas with brand requirements."
    ]
  }

};

export default digitalDesignMarketting;

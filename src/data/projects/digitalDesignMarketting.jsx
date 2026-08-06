
import thumbImg           from "../../assets/projects/digital-design/thumb.webp";
import heroImg            from "../../assets/projects/digital-design/hero.webp"
import heroMobileImg      from "../../assets/projects/digital-design/hero-m.webp"

const digitalDesignMarketting = {

  id                : 4,
  id                : 6,
  slug              : "digital-design",

  title             : "Digital Design & Marketing",
  subtitle          : "Gaming PCs | PC Hardware | Software",

  featured: false,
  year: 2026,
  platform: "HTML/CSS",

  thumbnail: thumbImg,
  heroImage: heroImg,

  featureTagline: "Gaming Campaigns",
  featureTitle: "Landing Page Development",

  description: "This case study is currently being documented.",

  github: "",
  liveSite: "",

  featuredCaseStudy: false,
  caseStudyHero: "",
  caseStudyText: "",

  sections: [
    { type: "hero", data: "hero" },
    { type: "summary", data: "summary" }
  ],

  hero: {
    image         : heroImg,
    imageMobile   : heroMobileImg,
    imageAlt      : "Mazda",
    title         : "My React Project"
  },

  summary: {
    bgClass: "",
    wrapperClass: "std-wrapper",
    metadata: {
      role: "Frontend Developer",
      projectType: "HTML/CSS",
      year: 2026,
      status: "Coming Soon"
    },
    technologies: [],
    github: "",
    liveSite: ""
  },

  overview: {},
  featuresGrid: {},
  gallery: {},
  techStack: {},
  contact: {}
};

export default digitalDesignMarketting;

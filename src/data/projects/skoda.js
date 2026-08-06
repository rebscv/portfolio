import { data } from "react-router-dom";

import thumbImg                     from "../../assets/projects/skoda/thumb.webp";

const skodaDealer = {

  id: 7,
  slug: "škoda-dealer-website",

  title: "Cricks Noosa Škoda",
  subtitle: "Case study coming soon.",

  featured: false,

  year: 2026,
  platform: "WordPress",

  thumbnail: thumbImg,
  heroImage: "",
  logo: "",

  featureTagline: "Škoda Dealer Website",
  featureTitle: "WordPress Website Development",

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

  hero: {},

  summary: {
    bgClass: "",
    wrapperClass: "std-wrapper",
    metadata: {
      role: "Frontend Developer",
      projectType: "WordPress",
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

export default skodaDealer;

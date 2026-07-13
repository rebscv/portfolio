import Hero from "./Hero/Hero";
import SummaryBlock from "./SummaryBlock/SummaryBlock";
import TextBlock from "./TextBlock/TextBlock";
import ImageBlock from "./ImageBlock/ImageBlock";
// import Section from "./Section/Section";
// import Image from "./Image/Image";
// import Gallery from "./Gallery/Gallery";
// import TechStack from "./TechStack/TechStack";
// import CTA from "./CTA/CTA";

const componentMap = {
    hero: Hero,
    summary: SummaryBlock,
    textblock: TextBlock,
    image: ImageBlock
    // gallery: Gallery,
    // techStack: TechStack,
    // cta: CTA
};

export default componentMap;
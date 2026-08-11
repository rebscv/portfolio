import Hero from "./Hero/Hero";
import SummaryBlock from "./SummaryBlock/SummaryBlock";
import TextBlock from "./TextBlock/TextBlock";
import ImageBlock from "./ImageBlock/ImageBlock";
import FeaturesGrid from "./FeaturesGrid/FeaturesGrid";
import Gallery from "./Gallery/Gallery";
import TechStack from "./TechStack/TechStack";
import CTA from "./CTA/CTA";
import ProcessBlock from "./ProcessBlock/ProcessBlock";
import GalleryBlock from "./GalleryBlock/GalleryBlock";
import GalleryFancyBox from "./GalleryFancyBox/GalleryFancyBox";

// import Section from "./Section/Section";
// import Image from "./Image/Image";

// import TechStack from "./TechStack/TechStack";
// import CTA from "./CTA/CTA";

const componentMap = {
    hero: Hero,
    summary: SummaryBlock,
    textBlock: TextBlock,
    image: ImageBlock,
    featuresGrid: FeaturesGrid,
    gallery: Gallery,
    cta: CTA,
    techStack: TechStack,
    process: ProcessBlock,
    gallery: GalleryBlock,
    galleryFancy: GalleryFancyBox
};

export default componentMap;
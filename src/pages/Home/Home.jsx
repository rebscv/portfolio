import Hero from "../../components/Hero/Hero";
import FeaturedProjects from "../../components/Projects/FeaturedProjects/FeaturedProjects";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import FeaturedCaseStudy from "../../components/FeaturedCaseStudy/FeaturedCaseStudy";
import ViewProjects from "../../components/Projects/ViewProjects/ViewProjects";

import projects from "../../data/projects";

function Home() {   

    const featuredCaseStudies  = projects.filter(
        project => project.featuredCaseStudy
    );

    return (
        <>

            <Hero />
            <FeaturedProjects />
            <About />
            <Skills />

            {featuredCaseStudies.map((project, index) => (
                <FeaturedCaseStudy key={project.slug} project={project} number={String(index + 1).padStart(2, "0")} />
            ))}

            <ViewProjects />

        </>
    );
}

export default Home;
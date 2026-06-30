import Hero from "../../components/Hero/Hero";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/Contact/Contact";

function Home() {
    return (
        <>

            <Hero />
            <FeaturedProjects />
            <About />
            <Skills />
            <Experience />
            <Contact />

        </>
    );
}

export default Home;
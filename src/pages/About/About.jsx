import { useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "../../animations/FadeIn";

import Experience from "../../components/Experience/Experience";
import ReactProjects from "../../components/ReactProjects/ReactProjects";

import reactImg             from "../../assets/about/react-comparrison.webp";
import codeImg              from "../../assets/about/code.webp";
import layersImg            from "../../assets/about/layers.webp";
import filesImg             from "../../assets/about/files.webp";


function About() {

    useEffect(() => { 

        document.title = `About - Reuven Vergara`;  
        const description = document.querySelector(`meta[name="description"]`);        
        if (description) { description.setAttribute(
            "content", "Learn more about Reuven Vergara, a Front End Developer with experience in React, WordPress, HTML, CSS and responsive web development."
        ); }

        return () => {
            document.title = "Reuven Vergara - Front End Developer";
            if (description) { description.setAttribute("content",  "Portfolio of Reuven Vergara, a Front End Developer specialising in React, JavaScript, HTML, CSS and WordPress."); }
        };        

    }, []);

    return (

        <>
        <section className="content purple-gradiant-top-bg">
            <FadeIn className="sml-wrapper">
                <h1><span className="title-eyebrow">Frontend Developer & more</span><span>About me</span></h1>
                <p>I’m a Frontend Developer with almost a decade of experience across web design and development, with a strong focus on building responsive, user-friendly websites. My experience includes developing and maintaining WordPress websites, creating reusable templates from Figma and other UI/UX designs, and translating designs into functional, production-ready interfaces using HTML, CSS and JavaScript. I’ve worked extensively within CMS environments, building flexible page templates and components that can be reused across multiple websites while maintaining consistency, performance and responsive behaviour.</p>
                <p>While my professional experience has primarily been centred around WordPress and traditional frontend development, I’m continuing to expand my skills into modern frontend technologies. Most recently, I’ve been developing projects with React and Vite to build a stronger understanding of component-based architecture, reusable interfaces and modern JavaScript development. I enjoy taking what I’ve learned through years of frontend development and applying it to new technologies, with a focus on continually improving how I build, structure and maintain websites.</p>
            </FadeIn>
        </section>


        <Experience />


        <section className="purple-bg">
            <FadeIn className="sml-wrapper">
                <h2><span className="title-eyebrow">Professional Development</span><span>My React journey</span></h2>
                <p>After several years working primarily with HTML, CSS, JavaScript and WordPress, I wanted to broaden my development skills and explore a more modern approach to building front-end applications.</p>
                <p>I started learning React as a way to strengthen my JavaScript knowledge, understand component-based development and challenge myself to build applications in a different way. I'm also interested in moving into a role where I can continue working with React and modern front-end technologies.</p>
            </FadeIn>
        </section>


        <section className="purple-gradiant-top-bg dark-bg">
            <FadeIn className="lrg-wrapper no-padding-top">

                <div className="grid-d-two-cols d-grid-cols-40-60">

                    <div className="center-content">
                        <div className="grid">
                            <h3 className="h2"><span className="title-eyebrow">Mazda Dealership Demo</span> Learn by building</h3>
                            <p>I've approached learning React by building real projects rather than relying solely on tutorials. My first major project was rebuilding one of the dealership templates I had previously worked on, transforming it into a fully responsive React application. This gave me the opportunity to work with reusable components, React Router, state management, dynamic data, filtering, sorting, animations and responsive UI.</p>
                            <div><Link to="/projects/react-development" className="btn btn-outline">View Case Study <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                        </div>
                    </div>

                    <div>
                        <img loading="lazy" src={reactImg} width="1920" height="1080" alt="Three Website Version of React Demo" />
                    </div>

                </div>

            </FadeIn>
        </section>



        <section>
            <FadeIn className="sml-wrapper no-padding-bottom">

                <h2><span className="title-eyebrow">React Journey continues</span><span>Expanding My React Knowledge</span></h2>
                <p>As part of my continued development, I've recently started learning React to broaden my technical skill set and explore new ways of building modern, interactive web applications.</p>
                <p>Coming from a strong background in HTML, CSS, JavaScript and WordPress, React has been a great opportunity to build on what I already know while learning a different approach to structuring and developing websites and applications.</p>
                <p>I've started by putting what I've learned into practice rather than simply following tutorials. I rebuilt one of the dealership templates I had previously worked on as a React application, giving me the opportunity to work with reusable components, routing, dynamic data, filtering, state and responsive interfaces.</p>
                <p>I also built this portfolio in React, using the project to further develop my understanding of component architecture and creating a more maintainable and reusable codebase.</p>
                
            </FadeIn>
        </section>


        <ReactProjects />
        

        <section className="purple-gradiant-top-bg dark-bg">
            <div className="std-wrapper no-padding-bottom">

                <FadeIn className="grid-l-two-cols">

                    <div className="center-content">
                        <div className="grid">
                            <h2><span className="title-eyebrow">Keeping Things Tidy</span><span>Organised or OCD?</span></h2>
                            <p>I'm quite particular about keeping my work organised and consistent. I like things to be clean, easy to read and easy for someone else to understand, especially when working as part of a team. When writing code, I make an effort to keep everything properly structured and consistently formatted. This includes indentation, spacing, naming conventions and keeping files and folders organised. I use clear, predictable file names and avoid unnecessary inconsistencies, making it easier to navigate a project and pick up someone else's work.</p>
                        </div>
                    </div>

                    <div>
                        <img loading="lazy" src={codeImg} width="1200" height="960" alt="Clean code" />
                    </div>

                </FadeIn>


                <FadeIn className="grid-l-two-cols grid-l-reverse">

                    <div className="center-content">
                        <div className="grid">
                            <p>The same approach carries across to my design work. When working in Photoshop, I keep layers properly named and organised rather than leaving files filled with generic layer names. It might seem like a small detail, but it makes a big difference when revisiting a file, making changes or handing it over to someone else.</p>
                        </div>
                    </div>

                    <div>
                        <img loading="lazy" src={layersImg} width="1200" height="960" alt="Name and label layers" />
                    </div>

                </FadeIn>
                
                <FadeIn className="grid-l-two-cols">

                    <div className="center-content">
                        <div className="grid">
                            <p>I sometimes joke that I'm a little obsessive about keeping things tidy, but I think there's a practical reason behind it.</p>
                            <p><strong>Well-organised work is easier to read, easier to maintain and easier for a team to work with.</strong></p>
                            <p>From past experiences, taking a little extra time to keep things organised from the beginning can save a lot of time later. Whether that's finding a particular file, understanding someone else's code or making changes to a project months after it was first built.</p>
                        </div>
                    </div>

                    <div>
                        <img loading="lazy" src={filesImg} width="1200" height="960" alt="Organised files" />
                    </div>

                </FadeIn>
                

                <FadeIn className="grid">
                    <h3>Curious to see more?</h3>
                    <p>Explore my projects to see some of the work I've created and how I approach different projects from design through to development.</p>
                    <div><Link to="/projects" className="btn btn-outline">View All Projects <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                </FadeIn>
                               
                
            </div>
        </section>


        </>

        

        
    );

}

export default About;
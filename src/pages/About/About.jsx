import { Link } from "react-router-dom";
import Experience from "../../components/Experience/Experience";

import reactImg             from "../../assets/about/react-comparrison.webp";
import codeImg              from "../../assets/about/code.webp";
import layersImg            from "../../assets/about/layers.webp";
import filesImg             from "../../assets/about/files.webp";
import reactThumbImg        from "../../assets/projects/react-dealership/thumb.webp";
import portfolioThumbImg    from "../../assets/about/portfolio.webp";
import reactSoonThumbImg    from "../../assets/about/react-coming-soon.webp";

function About() {

    return (

        <>
        <section className="content purple-gradiant-top-bg">
            <div className="sml-wrapper">
                <h1><span className="title-eyebrow">Frontend Developer & more</span><span>About me</span></h1>
                <p>I’m a Frontend Developer with almost a decade of experience across web design and development, with a strong focus on building responsive, user-friendly websites. My experience includes developing and maintaining WordPress websites, creating reusable templates from Figma and other UI/UX designs, and translating designs into functional, production-ready interfaces using HTML, CSS and JavaScript. I’ve worked extensively within CMS environments, building flexible page templates and components that can be reused across multiple websites while maintaining consistency, performance and responsive behaviour.</p>
                <p>While my professional experience has primarily been centred around WordPress and traditional frontend development, I’m continuing to expand my skills into modern frontend technologies. Most recently, I’ve been developing projects with React and Vite to build a stronger understanding of component-based architecture, reusable interfaces and modern JavaScript development. I enjoy taking what I’ve learned through years of frontend development and applying it to new technologies, with a focus on continually improving how I build, structure and maintain websites.</p>
            </div>
        </section>


        <Experience />


        <section className="purple-bg ">
            <div className="sml-wrapper">
                <h2><span className="title-eyebrow">Professional Development</span><span>My React journey</span></h2>
                <p>After several years working primarily with HTML, CSS, JavaScript and WordPress, I wanted to broaden my development skills and explore a more modern approach to building front-end applications.</p>
                <p>I started learning React as a way to strengthen my JavaScript knowledge, understand component-based development and challenge myself to build applications in a different way. I'm also interested in moving into a role where I can continue working with React and modern front-end technologies.</p>
            </div>
        </section>


        <section className="purple-gradiant-top-bg dark-bg">
            <div className="lrg-wrapper no-padding-top">

                <div className="grid-d-two-cols d-grid-cols-40-60">

                    <div className="center-content">
                        <div className="grid">
                            <h3 className="h2"><span className="title-eyebrow">Mazda Dealership Demo</span> Learn by building</h3>
                            <p>I've approached learning React by building real projects rather than relying solely on tutorials. My first major project was rebuilding one of the dealership templates I had previously worked on, transforming it into a fully responsive React application. This gave me the opportunity to work with reusable components, React Router, state management, dynamic data, filtering, sorting, animations and responsive UI.</p>
                            <div><Link to="/about" className="btn btn-outline">View Case Study <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                        </div>
                    </div>

                    <div>
                        <img src={reactImg} alt="" />
                    </div>

                </div>

            </div>
        </section>



        <section>
            <div className="sml-wrapper no-padding-bottom">

                <h2><span className="title-eyebrow">React Journey continues</span><span>Expanding My React Knowledge</span></h2>
                <p>As part of my continued development, I've recently started learning React to broaden my technical skill set and explore new ways of building modern, interactive web applications.</p>
                <p>Coming from a strong background in HTML, CSS, JavaScript and WordPress, React has been a great opportunity to build on what I already know while learning a different approach to structuring and developing websites and applications.</p>
                <p>I've started by putting what I've learned into practice rather than simply following tutorials. I rebuilt one of the dealership templates I had previously worked on as a React application, giving me the opportunity to work with reusable components, routing, dynamic data, filtering, state and responsive interfaces.</p>
                <p>I also built this portfolio in React, using the project to further develop my understanding of component architecture and creating a more maintainable and reusable codebase.</p>
                
                
            </div>
        </section>



        <section className="grid dark-bg">


            <div className="sml-wrapper no-paddding-top no-padding-bottom">
                <h3>Plans for expansion</h3>
                <p>I'm planning to continue expanding my React knowledge by building a series of smaller applications, with each project focusing on a different area of development:</p>
            </div>
            
            <div className="std-wrapper no-padding-top no-padding-bottom">
                <div className="grid-d-three-cols grid-t-two-cols">


                    <div className="block-round-border">
                        <div className="block-padding"><h4 className="t-spacing">Dealership Rebuild</h4></div>
                        <img src={reactThumbImg} alt="" />
                        <div className="block-padding grid">
                            <p><b>Status: Complete</b></p>                          
                            <p>A larger, realistic React project focused on component architecture, routing, dynamic data and complex UI.</p>
                            <div><Link to="/about" className="btn btn-outline">View Case Study <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                        </div>                     
                    </div>

                    <div className="block-round-border">
                        <div className="block-padding"><h4 className="t-spacing">Portfolio Website</h4></div>
                        <img src={portfolioThumbImg} alt="" />
                        <div className="block-padding grid">     
                            <p><b>Status: Complete</b></p>                       
                            <p>A real-world React application built to create my own portfolio while continuing to develop my React skills.</p>                            
                        </div>                     
                    </div>

                    <div className="block-round-border">
                        <div className="block-padding"><h4 className="t-spacing">Weather App</h4></div>
                        <img src={reactSoonThumbImg} alt="" />
                        <div className="block-padding grid">
                            <p><b>Status: TBC</b></p>
                            <p>An API-driven application focused on fetching external data, asynchronous JavaScript, loading states and error handling.</p>
                        </div>
                    </div>

                    <div className="block-round-border">
                        <div className="block-padding"><h4 className="t-spacing">Movie / TV App</h4></div>
                        <img src={reactSoonThumbImg} alt="" />
                        <div className="block-padding grid">
                            <p><b>Status: TBC</b></p>
                            <p>A project focused on API integration, searching, filtering, pagination and displaying dynamic results.</p>
                        </div>
                    </div>

                    <div className="block-round-border">
                        <div className="block-padding"><h4 className="t-spacing">Expense Tracker</h4></div>
                        <img src={reactSoonThumbImg} alt="" />
                        <div className="block-padding grid">
                            <p><b>Status: TBC</b></p>
                            <p>An application focused on React state, forms, calculations and persisting data with local storage.</p>
                        </div>
                    </div>

                    <div className="block-round-border">
                        <div className="block-padding"><h4 className="t-spacing">Headless WordPress + React</h4></div>
                        <img src={reactSoonThumbImg} alt="" />
                        <div className="block-padding grid">
                            <p><b>Status: TBC</b></p>
                            <p>A project combining my existing WordPress experience with React, exploring REST APIs and using WordPress as a headless CMS.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="sml-wrapper no-padding-top">
                <p>For me, the goal isn't simply to add React to my list of skills. I want to build practical experience through different types of projects, understand how the technology can be applied to real-world problems, and continue growing as a front-end developer.</p>
            </div>


        </section>


        <section className="purple-gradiant-top-bg">
            <div className="sml-wrapper no-padding-bottom">

                <h2><span className="title-eyebrow">Keeping Things Tidy</span><span>Organised or OCD?</span></h2>
                <p>I'm quite particular about keeping my work organised and consistent. I like things to be clean, easy to read and easy for someone else to understand &mdash; especially when working as part of a team. When writing code, I make an effort to keep everything properly structured and consistently formatted. This includes indentation, spacing, naming conventions and keeping files and folders organised. I use clear, predictable file names and avoid unnecessary inconsistencies, making it easier to navigate a project and pick up someone else's work.</p>
                <p>The same approach carries across to my design work. When working in Photoshop, I keep layers properly named and organised rather than leaving files filled with generic layer names. It might seem like a small detail, but it makes a big difference when revisiting a file, making changes or handing it over to someone else.</p>
                <p>I sometimes joke that I'm a little obsessive about keeping things tidy, but I think there's a practical reason behind it. <strong>Well-organised work is easier to read, easier to maintain and easier for a team to work with.</strong></p>
                <p>Taking a little extra time to keep things organised from the beginning can save a lot of time later &mdash; whether that's finding a particular file, understanding someone else's code or making changes to a project months after it was first built.</p>

            </div>
        </section>



        <section>
            <div className="full-wrapper no-padding-top">

                

                <div className="grid-d-three-cols grid-l-two-cols no-gaps">
                    <div><img src={codeImg} alt="" /></div>
                    <div><img src={filesImg} alt="" /></div>
                    <div><img src={layersImg} alt="" /></div>
                </div>



            </div>
        </section>


        </>

        

        
    );

}

export default About;
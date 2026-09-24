import { Link } from "react-router-dom";
import FadeIn from "../../animations/FadeIn";

import reactThumbImg        from "../../assets/projects/react-dealership/thumb.webp";
import portfolioThumbImg    from "../../assets/about/portfolio.webp";
import reactSoonThumbImg    from "../../assets/about/react-coming-soon.webp";

function ReactProjects() {

    const projects = {

        items : [

            {
                id : 1,
                title: "Dealership Rebuild",
                image: reactThumbImg,
                status: "Complete",
                description: "A larger, realistic React project focused on component architecture, routing, dynamic data and complex UI.",
                link: "/projects/react-development",
                github: "https://github.com/rebscv/react-dealership-homepage",
            },
            {
                id : 2,
                title: "Portfolio Website",
                image: portfolioThumbImg,
                status: "Complete",
                description: "A real-world React application built to create my own portfolio while continuing to develop my React skills.",
                link: "",
                github: "https://github.com/rebscv/portfolio/",
            },
            {
                id : 3,
                title: "Weather App",
                image: reactSoonThumbImg,
                status: "TBC",
                description: "An API-driven application focused on fetching external data, asynchronous JavaScript, loading states and error handling.",
            },
            {
                id : 4,
                title: "Movie / TV App",
                image: reactSoonThumbImg,
                status: "TBC",
                description: "A project focused on API integration, searching, filtering, pagination and displaying dynamic results.",
            },
            {
                id : 5,
                title: "Expense Tracker",
                image: reactSoonThumbImg,
                status: "TBC",
                description: "An application focused on React state, forms, calculations and persisting data with local storage.",
            },
            {
                id : 6,
                title: "Headless WordPress + React",
                image: reactSoonThumbImg,
                status: "TBC",
                description: "A project combining my existing WordPress experience with React, exploring REST APIs and using WordPress as a headless CMS.",
            }
        ]

    };

  
    return (
        <section className="grid dark-bg">

            <div className="sml-wrapper no-paddding-top no-padding-bottom">
                <h3>Plans for expansion</h3>
                <p>I'm planning to continue expanding my React knowledge by building a series of smaller applications, with each project focusing on a different area of development:</p>
            </div>
            
            <div className="std-wrapper no-padding-top no-padding-bottom">
                <div className="grid-d-three-cols grid-t-two-cols">

                    {projects.items.map((item, index) => (

                        <FadeIn key={item.id} className="block-round-border" delay={index * 0.25}>

                            <div className="block-padding dark-grey-bg"><h4 className="t-spacing">{item.title}</h4></div>
                            <img loading="lazy" src={item.image} alt={item.imageAlt} width="1024" height="583" />
                            
                            <div className="block-padding grid">
                                <p><b>Status: {item.status}</b></p>
                                {Array.isArray(item.description) ? item.description.map((para, i) => <p key={i}>{para}</p> ) : <p>{item.description}</p> }
                                {item.link && <div><Link to={item.link} className="btn btn-outline">View Case Study <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div> }
                                {item.github && <div><Link to={item.github} target="_blank" className="btn btn-outline btn-github">View GitHub<svg className="icon-github"><use xlinkHref="/icons.svg#icon-github"></use></svg></Link></div> }
                            </div>

                        </FadeIn>

                    ))}



                </div>
            </div>

            <FadeIn className="sml-wrapper no-padding-top">
                <p>For me, the goal isn't simply to add React to my list of skills. I want to build practical experience through different types of projects, understand how the technology can be applied to real-world problems, and continue growing as a front-end developer.</p>
            </FadeIn>

        </section>
    )

}

export default ReactProjects;
import "./Experience.css";
import FadeIn from "../../animations/FadeIn";

function Experience() {

    const timeline = {

        items : [
            {
                id          : 1,
                year        : "2021-Present",
                position    : "Front End Developer",
                company     : "AdTorque Edge",
                description : [
                    "Develop and maintain responsive front-end components and reusable templates for automotive dealership websites using HTML, CSS, and JavaScript across WordPress and Joomla.",
                    "Translate Figma designs into accessible, consistent interfaces while collaborating with internal teams and external developers on website builds, updates, and ongoing production support."
                ]
            },
            {
                id          : 2,
                year        : "2018 – 2021",
                position    : "Lead Digital Designer",
                company     : "Centre Com",
                description : [
                    "Designed and developed responsive landing pages and campaign content supporting e-commerce and marketing initiatives. Created digital assets including banners, eDMs, and social media graphics, alongside print and in-store materials across 10 retail locations.",
                    "Produced and retouched product photography for e-commerce catalogues while collaborating with marketing teams and external partners to deliver campaigns on schedule."
                ]
            },
            {
                id          : 3,
                year        : "2013 – 2016",
                position    : "English Teacher",
                company     : "Kids World — Tokyo, Japan",
                description : [
                    "Taught English to students aged 1–12, developing lesson plans and teaching materials to support engaging learning experiences.",
                    "Supervised excursions and centre activities, communicated with parents about student progress, and contributed to seasonal events and school programs through artwork and creative displays."
                ]
            },
            {
                id          : 4,
                year        : "2013",
                position    : "Project Officer – Online Education",
                company     : "Pharmaceutical Society of Australia",
                description : [
                    "Managed website content and developed digital resources for online education programs, including e-learning modules using Adobe Captivate.",
                    "Produced and edited video content, filming events, lectures, and conventions and creating motion graphics using Final Cut Pro. Supported customer engagement through data management and email and phone enquiries."
                ]
            },
            {
                id          : 5,
                year        : "2011 – 2012",
                position    : "Web Designer",
                company     : "G.I Computer Innovations",
                description : [
                    "Designed and developed commercial websites and e-commerce stores using WordPress and Drupal, translating client requirements into functional and user-friendly digital experiences.",
                    "Consulted with clients to recommend web solutions aligned with their business goals and provided ongoing website support. Created supporting digital and print marketing assets while managing multiple projects and timelines from concept through to delivery."
                ]
            },
            {
                id          : 6,
                year        : "2011",
                position    : "Web and Graphic Design",
                company     : "BOOYAH",
                description : [
                    "Designed website templates and visual layouts using Adobe Photoshop, researching design trends and best practices to inform creative direction.",
                    "Developed logos and visual identities from client briefs, creating concepts and prototypes for approval. Produced digital and print marketing collateral, including business cards, brochures, and letterheads, preparing artwork for professional print production."
                ]
            }
        ]

    };


  
    return (
        <section className="experience-content dark-bg black-bg">
            <div className="std-wrapper no-padding-top">

                <FadeIn>
                    <h2 className="t-center">
                        <span className="title-eyebrow">Experience</span>
                        <span>The journey so far</span>
                    </h2>
                </FadeIn>
            
                <div className="experience-grid">
                
                    {timeline.items.map((item, index) => (
                        <FadeIn key={item.id} className="experience-item" delay={index * 0.25} direction="right">

                            <div className="experience-text">
                                <div className="experience-year">{item.year}</div>
                                <div className="experience-head">
                                    <div className="experience-position h3">{item.position}</div>
                                    <div className="experience-company">{item.company}</div>                                    
                                </div>
                            </div>

                            <div className="experience-description">
                                {Array.isArray(item.description) ? item.description.map((para, i) => <p key={i}>{para}</p> ) : <p>{item.description}</p> }
                            </div>

                        </FadeIn>
                    ))}

                </div>


            </div>
        </section>
    )
}

export default Experience;
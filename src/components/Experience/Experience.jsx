import "./Experience.css";
function Experience() {

    const timeline = {

        items : [
            {
                id          : 1,
                year        : "2021-Present",
                position    : "Front End Developer",
                company     : "AdTorque Edge",
                description : [
                    "Develop and maintain front-end components and reusable templates for automotive dealership websites, building responsive pages using HTML, CSS, and JavaScript within CMS platforms such as WordPress and Joomla. Translate UI/UX designs from Figma into functional and accessible web interfaces while ensuring consistency and performance across multiple dealership sites. Collaborate with internal teams and external developers to deliver website builds, updates, and production support."
                ]
            },
            {
                id          : 2,
                year        : "2018 – 2021",
                position    : "Lead Digital Designer",
                company     : "Centre Com",
                description : [
                    "Designed and developed responsive landing pages and campaign pages supporting e-commerce promotions and marketing initiatives. Produced digital marketing assets including banners, eDM newsletters, and social media graphics, while also creating print and in-store materials for 10 retail locations. Photographed and retouched product imagery for e-commerce catalogues and collaborated closely with marketing teams and external partners to deliver campaign content. Managed multiple digital design projects simultaneously while meeting tight deadlines."
                ]
            },
            {
                id          : 3,
                year        : "2013 – 2016",
                position    : "English Teacher",
                company     : "Kids World — Tokyo, Japan",
                description : [
                    "Conducted English classes for students aged 1–12, preparing lesson plans and teaching materials to support engaging learning experiences. Supervised excursions and centre activities, communicated with parents regarding student progress, and participated in seasonal events and school programs. Also created artwork and decorations to support the centre’s events and learning environment."
                ]
            },
            {
                id          : 4,
                year        : "2013",
                position    : "Project Officer – Online Education",
                company     : "Pharmaceutical Society of Australia",
                description : [
                    "Managed and maintained website content while creating new digital resources for online education programs. Developed e-learning modules using Adobe Captivate and produced video content including filming events, lectures, and conventions both in-house and interstate. Edited video and created motion graphics using Final Cut Pro to support educational and promotional materials. Supported customer engagement through data management and by responding to enquiries via email and phone."
                ]
            },
            {
                id          : 5,
                year        : "2011 – 2012",
                position    : "Web Designer",
                company     : "G.I Computer Innovations",
                description : [
                    "Designed and developed commercial websites and e-commerce stores using WordPress and Drupal, translating client requirements into functional and user-friendly digital experiences. Consulted with clients to recommend website solutions aligned with their business goals and provided ongoing support to help them manage and update their sites. Created supporting marketing assets including digital graphics and signage for advertising campaigns. Managed multiple projects simultaneously, tracking timelines and milestones to ensure on-time delivery while maintaining clear communication with clients and internal teams."
                ]
            },
            {
                id          : 6,
                year        : "2011",
                position    : "Graphic Designer",
                company     : "BOOYAH Web and Graphic Design",
                description : [
                    "Designed website templates and visual layouts in Adobe Photoshop for web development production, researching design trends and best practices to inform creative direction. Created logo branding and visual identities based on client briefs, producing concepts and prototypes for review and approval. Developed marketing and print collateral including business cards, brochures, and letterheads, preparing artwork to meet professional print production standards."
                ]
            }
        ]

    };


  
    return (
        <section className="experience-content dark-bg black-bg">
            <div className="sml-wrapper no-padding-top">

                <h2 className="t-center">
                    <span className="title-eyebrow">Experience</span>
                    <span>The journey so far</span>
                </h2>
            
                <div className="experience-grid">
                
                    {timeline.items.map((item) => (
                        <div key={item.id} className="experience-item">

                            <div className="experience-text">
                                <div className="experience-year">{item.year}</div>
                                <div>
                                    <div className="experience-position h3">{item.position}</div>
                                    <div className="experience-company">{item.company}</div>                                    
                                </div>
                            </div>

                            <div className="experience-description">{item.description}</div>

                        </div>
                    ))}

                </div>


            </div>
        </section>
    )
}

export default Experience;
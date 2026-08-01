import "./Experience.css";
function Experience() {

    const timeline = {

        items : [
            {
                id          : 1,
                title       : "2021-Present",
                description : "Front End Developer",
                company : "AdTorque Edge"
            },
            {
                id          : 2,
                title       : "2021-Present",
                description : "Front End Developer",
                company : "AdTorque Edge"
            },
            {
                id          : 3,
                title       : "2021-Present",
                description : "Front End Developer",
                company : "AdTorque Edge"
            }
        ]

    };


  
    return (
        <section className="experience-content dark-bg black-bg">
            <div className="std-wrapper">

                <h2 className="t-center">
                    <span className="title-eyebrow">Experience</span>
                    <span>My Timeline</span>
                </h2>
            
                <div className="experience-grid">
                
                    {timeline.items.map((item) => (
                        <div key={item.id} className="experience-item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.company}</p>
                        </div>
                    ))}

                </div>


            </div>
        </section>
    )
}

export default Experience;
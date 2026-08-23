import FadeIn from "../../animations/FadeIn";
import "./Skills.css";

import skillsContent from "../../data/skills"
import skillsBg from "../../assets/skills/skills-bg.webp";

function Skills() {

  
    return (
        <section className="skills-content dark-bg black-bg" style={{ backgroundImage: `url(${skillsBg})` }}>
            <div className="std-wrapper">
                
                <h2 className="t-center">
                    <span className="title-eyebrow">Skills</span>
                    <span>Techstacks & Tools</span>
                </h2>

                {Object.entries(skillsContent).map(([categoryName, categery]) => (
                    <div key={categoryName} className="grid">

                        <div className="skills-content-grid grid-d-five-cols grid-t-two-cols">
                        {categery.items.map((skill, index) => (

                            <FadeIn key={skill.id} delay={index * 0.15} once={false}>
                                <div className="skill-col">
                                    <div className="skill-img"><img src={skill.image} alt={skill.title} /></div>
                                    <div className="skill-name">{skill.title}</div>
                                </div>
                            </FadeIn>

                        ))}
                        </div>
                    </div>
                ))}


            </div>
            <div className="skills-content-bg"></div>
        </section>
    )
}

export default Skills;
import FadeIn from "../../animations/FadeIn";
import "./Skills.css";

import skillsContent    from "../../data/skills"
import gradiantBg       from "../../assets/gradient-bg.webp";

function Skills() {

  
    return (
        <section className="skills-content dark-bg black-bg gradiant-black-overlay-bg" style={{ backgroundImage: `url(${gradiantBg})` }}>
            <div className="std-wrapper">
                
                <h2>
                    <span className="title-eyebrow">Skills</span>
                    <span>Techstacks & Tools</span>
                </h2>

                <div className="skills-content-grid">                

                    {Object.entries(skillsContent).map(([categoryName, categery]) => (
                        <div key={categoryName} className={`skills-content-category ${categery.class}`}>

                            <div className="skills-content-category-title">{categery.title}</div>
                            <div className="skills-content-items">

                                    {categery.items.map((skill, index) => (

                                        <FadeIn key={skill.id}>
                                            <div className="skill-col">
                                                {skill.image && <div className="skill-img"><img loading="lazy" src={skill.image} alt={skill.title} width="64" height="64" /></div>}
                                                <div className="skill-name">{skill.title}</div>
                                            </div>
                                        </FadeIn>

                                    ))}

                            </div>                            
                        </div>
                    ))}

                </div>


            </div>

            <div className="gradiant-black-overlay-bg"></div>
        </section>
    )
}

export default Skills;
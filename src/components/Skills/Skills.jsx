import "./Skills.css";
import skillsContent from "../../data/skills"

function Skills() {

  
    return (
        <section className="skills-content dark-bg black-bg">
            <div className="lrg-wrapper">
                
                <h2>
                    <span className="title-eyebrow">Skills</span>
                    <span>Frontend & Tools</span>
                </h2>


            
                {Object.entries(skillsContent).map(([categoryName, categery]) => (
                    <div key={categoryName} className="grid">
                        <h3>{categoryName}</h3>
                        <div className="skills-content-grid grid-d-five-cols">
                        {categery.items.map(skill => (

                            <div className="skill-col" key={skill.id}>
                                <img src={skill.image} alt={skill.title} />
                                <div className="skill-name">{skill.title}</div>                                    
                            </div>

                        ))}
                        </div>
                    </div>
                ))}






            </div>
        </section>
    )
}

export default Skills;
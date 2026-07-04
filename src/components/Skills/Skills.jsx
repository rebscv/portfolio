import "./Skills.css";
import skillsContent from "../../data/skills"

function Skills() {

  
    return (
        <section className="skills-content">
            <div className="std-wrapper">
                
                <h2>Skills</h2>

                <div className="grid-d-two-cols">
                
                    {Object.entries(skillsContent).map(([categoryName, categery]) => (
                        <div key={categoryName} className="grid">
                            <h3>{categoryName}</h3>
                            {categery.items.map(skill => (
                                <div key={skill.id}>
                                    <h4>{skill.title}</h4>
                                    <p>{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>




            </div>
        </section>
    )
}

export default Skills;
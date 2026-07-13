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

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin nisl vel massa placerat vestibulum. Sed lobortis quam vel elit condimentum, vitae tempus arcu dictum. Nulla turpis augue, maximus eget nisi ut, tincidunt sagittis dui. Donec id lacus eget justo finibus dictum quis bibendum ante.</p>


            
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
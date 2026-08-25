import "./TechStack.css";

function TechStacks ({ wrapperClass, bgClass, gridColumns, title, items }) {

    return (
        <section className={`project-teck-stacks ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <h2>{title}</h2>

                <div className={`project-teck-stacks-grid ${gridColumns || 'grid-d-three-cols'}`}>

                    {items.map((item, index) =>(
                        <div key={{index}} className="project-teck-stack-item">{item}</div>
                    ))}

                </div>
            
            </div>
        </section>
    )
}

export default TechStacks;
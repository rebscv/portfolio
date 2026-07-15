function FeaturesGrid ({ wrapperClass, bgClass, gridColumns, title, items }) {

    return (
        <section className={`project-features-grid ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <h2>{title}</h2>

                <div className={`project-features-grid ${gridColumns || 'grid-d-three-cols'}`}>

                    {items.map((item) =>(
                        <article key={item.title} className="features-grid-item grid">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}

                </div>
            
            </div>
        </section>
    )
}

export default FeaturesGrid;
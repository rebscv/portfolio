function Gallery ({ wrapperClass, bgClass, gridColumns, title, items }) {

    return (
        <section className={`project-gallery ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <h2>{title}</h2>

                <div className={`project-features-grid ${gridColumns || 'grid-d-three-cols'}`}>

                    {items.map((item) =>(
                        <div key={item.id}>
                            <img src={item.image} alt={item.imageAlt} loading="lazy" width={item.width} height={item.height} />
                            {item.title && <p><strong>{item.title}</strong></p>}
                            {item.description &&<p>{item.description}</p>}
                        </div>
                    ))}

                </div>
            
            </div>
        </section>
    )
}

export default Gallery;
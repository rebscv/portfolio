import "./imageBlock.css";

function ImageBlock ({ title, gridClass, items, wrapperClass, bgClass, backgroundImage }) {

    return (
        <section className={`${bgClass || 'dark-bg black-bg'} project-image-block`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <div className={`${gridClass || ''}`}>

                    {items.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} />
                        </div>
                    ))}


                </div>

            </div>            
        </section>
    )
}

export default ImageBlock;
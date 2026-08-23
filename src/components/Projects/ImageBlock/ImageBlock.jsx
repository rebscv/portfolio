import "./imageBlock.css";

function ImageBlock ({ image, imageAlt, width, height, wrapperClass, bgClass, backgroundImage }) {

    return (
        <section className={`${bgClass || 'dark-bg black-bg'} project-image-block`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>
                
                <img src={image} alt={imageAlt} loading="lazy" width={width} height={height} />

            </div>            
        </section>
    )
}

export default ImageBlock;
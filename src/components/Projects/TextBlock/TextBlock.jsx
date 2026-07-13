function Text ({ title, text, wrapperClass, bgClass }) {

    return (
        <section className={`${bgClass || 'dark-bg black-bg'} project-text-block`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <h1>{title}</h1>
                {text && text}


            </div>            
        </section>
    )
}

export default Text;
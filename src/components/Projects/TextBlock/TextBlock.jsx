function Text ({ title, text, wrapperClass, bgClass }) {

    return (
        <section className={`project-text-block ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                <h1>{title}</h1>
                {text && text}


            </div>            
        </section>
    )
}

export default Text;
function Text ({ title, text, wrapperClass, bgClass }) {

    return (
        <section className={`project-text-block ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                {title && <h1>{title}</h1>}
                {Array.isArray(text) ? text.map((para, i) => <p key={i}>{para}</p> ) : <p>{text}</p> }


            </div>            
        </section>
    )
}

export default Text;
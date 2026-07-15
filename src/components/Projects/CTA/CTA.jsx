import { Link } from "react-router-dom";

function CTA ({ wrapperClass, bgClass, title, text, buttons = [], }) {

    return (
        <section className={`project-cta ${bgClass || 'dark-bg black-bg'}`}>
            <div className={`${wrapperClass || 'std-wrapper'}`}>

                {title && <h2>{title}</h2>}
                {text && <p>{text}</p>}

                {buttons.length > 0 && (

                    <div className="btn-flex">

                        {buttons.map((button) => {
                            if (button.to) {
                                return (
                                    <Link key={button.label} to={button.to} className={`btn btn-${button.style || "primary"}`}>
                                        {button.label}
                                    </Link>
                                );
                            }

                            return (
                                <a key={button.label} href={button.href} target="_blank" rel="noopener noreferrer" className={`btn btn-${button.style || "primary"}`}>
                                    {button.label}
                                </a>
                            );
                        })}

                    </div>

                )}


            </div>
        </section>
    )
}

export default CTA;
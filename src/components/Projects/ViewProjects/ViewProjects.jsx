import { Link } from "react-router-dom";

import FadeIn from "../../../animations/FadeIn";


function ViewProjects () {
    return (

        <section className="black-bg dark-bg">
            <div className="std-wrapper no-padding-bottom no-padding-top">

                <h2><span class="title-eyebrow">Latest Work</span><span>Disover Projects</span></h2>

                <p>Learn about my latest project and discover the process, challenges and outcomes I've experienced.</p>

                <div><Link to="/projects" className="btn btn-outline">View All Projects <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>
                
            </div>
        </section>

    )
}

export default ViewProjects;
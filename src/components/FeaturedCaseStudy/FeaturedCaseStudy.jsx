import { Link } from "react-router-dom";

import "./FeaturedCaseStudy.css";
import FadeIn from "../../animations/FadeIn";


function featuredCaseStudy({ project }) {

    const { slug, title, subtitle, caseStudyHero, featureTitle, caseStudyText } = project;

    return (
        <section className={`featured-case-study-content dark-bg black-bg ${slug}`}>
            <div className="full-wrapper">

                <div className="featured-case-study-hero">
                    <img src={caseStudyHero} alt={title} loading="lazy" />
                </div>
                
                <div className="featured-case-study-text-container">


                        <FadeIn direction="up" duration={1}>
                            <div className="featured-case-study-text grid">
                                <h2>{featureTitle}</h2>
                                {caseStudyText}
                                <div>
                                    <Link to={`/projects/${slug}`} className="btn btn-primary">View Case Study</Link>
                                </div>
                            </div>
                        </FadeIn>

                </div>


            </div>
        </section>
    )
}

export default featuredCaseStudy;
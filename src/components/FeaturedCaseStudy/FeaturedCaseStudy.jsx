import { Link } from "react-router-dom";

import "./FeaturedCaseStudy.css";
import FadeIn from "../../animations/FadeIn";

function featuredCaseStudy({ project }) {

    const { slug, title, subtitle, caseStudyHero, featureTitle, caseStudyText, caseStudyHeroAlt, caseStudyHeroMobile, caseStudyHeroTablet, caseStudyHeroLaptop, caseStudyHeroDesktop } = project;

    return (
        <section className={`featured-case-study-content dark-bg black-bg ${slug}`}>
            <div className="full-wrapper">

                <div className="featured-case-study-hero">

                    <picture>
                        <source media="(min-width: 2000px)" srcSet={caseStudyHero} />
                        {caseStudyHeroDesktop && <source media="(min-width: 1440px)" srcSet={caseStudyHeroDesktop} />}
                        {caseStudyHeroLaptop && <source media="(min-width: 768px)" srcSet={caseStudyHeroLaptop} />}
                        {caseStudyHeroTablet && <source media="(min-width: 768px)" srcSet={caseStudyHeroTablet} />}
                        {caseStudyHeroMobile && <source srcSet={caseStudyHeroMobile} />}
                        <img src={caseStudyHero} alt={caseStudyHeroAlt} fetchPriority="high" width="3000" height="2000" />
                    </picture>

                </div>
                
                <div className="featured-case-study-text-container">


                        <FadeIn direction="up" duration={1} once={false}>
                            <div className="featured-case-study-text grid">
                                
                                <h2>{featureTitle}</h2>
                                {caseStudyText}
                                <div><Link to={`/projects/${slug}`} className="btn btn-outline">View Case Study <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link></div>

                            </div>
                        </FadeIn>

                </div>


            </div>
        </section>
    )
}

export default featuredCaseStudy;
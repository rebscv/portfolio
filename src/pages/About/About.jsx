import Experience from "../../components/Experience/Experience";

function About() {

    return (

        <>
        <section className="purple-gradiant-top-bg">
            <div className="sml-wrapper">


                <h1><span className="title-eyebrow">Frontend Developer & more</span><span>It about me</span></h1>
                    <p>I’m a Frontend Developer with almost a decade of experience across web design and development, with a strong focus on building responsive, user-friendly websites. My experience includes developing and maintaining WordPress websites, creating reusable templates from Figma and other UI/UX designs, and translating designs into functional, production-ready interfaces using HTML, CSS and JavaScript. I’ve worked extensively within CMS environments, building flexible page templates and components that can be reused across multiple websites while maintaining consistency, performance and responsive behaviour.</p>
                    <p>While my professional experience has primarily been centred around WordPress and traditional frontend development, I’m continuing to expand my skills into modern frontend technologies. Most recently, I’ve been developing projects with React and Vite to build a stronger understanding of component-based architecture, reusable interfaces and modern JavaScript development. I enjoy taking what I’ve learned through years of frontend development and applying it to new technologies, with a focus on continually improving how I build, structure and maintain websites.</p>
            </div>
        </section>



        <Experience />


        <section>
            <div className="sml-wrapper no-padding-top t-center">

            <h2><span className="title-eyebrow">Progress</span><span>Professional Development</span></h2>

            <div className="grid">
                <div class="experience-text">
                    <div class="experience-position h3">React Front-End Development</div>
                    <div class="experience-company">Currently learning React through tutorials and personal projects.</div>
                </div>
            </div>


            </div>
        </section>



        </>

        

        
    );

}

export default About;
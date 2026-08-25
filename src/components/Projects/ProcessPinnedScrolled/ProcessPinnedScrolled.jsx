import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./ProcessPinnedScroll.css";

function ProcessPinnedScroll({
    wrapperClass,
    bgClass,
    title,
    titleEyebrow,
    steps = []
}) {

    const sectionRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);
    const isAnimating = useRef(false);

    const maxStep = Math.max(steps.length - 2, 0);

    useEffect(() => {

        const handleWheel = (event) => {

            const section = sectionRef.current;

            if (!section) return;

            const rect = section.getBoundingClientRect();

            const sectionAtTop = rect.top <= 0 && rect.bottom > window.innerHeight;

            if (!sectionAtTop) return;

            if (isAnimating.current) {
                event.preventDefault();
                return;
            }

            const direction = event.deltaY > 0 ? 1 : -1;

            const nextStep = activeStep + direction;

            // Allow normal page scrolling once we reach
            // the beginning or end of the process.
            if (nextStep < 0 || nextStep >= steps.length) {
                return;
            }

            event.preventDefault();

            isAnimating.current = true;

            setActiveStep(nextStep);

            setTimeout(() => {
                isAnimating.current = false;
            }, 700);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };

    }, [activeStep, steps.length]);


    return (
        <section
            className={bgClass || "dark-bg black-bg"}
        >

            <div className={`${wrapperClass || "std-wrapper"}`}>

                <div
                    ref={sectionRef}
                    className="process-pinned-scroll"
                    style={{
                        "--step-count": Math.max(steps.length, 1)
                    }}
                >

                    <div className="process-pinned-scroll-sticky">

                        <div className="process-pinned-scroll-content grid-d-two-cols">

                            <div className="process-pinned-scroll-title">

                                {titleEyebrow && (
                                    <div className="project-text-block-title-eyebrow">

                                        <h2 className="title-eyebrow">
                                            {titleEyebrow}
                                        </h2>

                                        <h3 className="h2">
                                            {title}
                                        </h3>

                                    </div>
                                )}

                                {!titleEyebrow && title && (
                                    <h2>{title}</h2>
                                )}

                            </div>


                            <div className="process-pinned-scroll-steps">

                                <motion.div
                                    className="process-pinned-scroll-track"
                                    animate={{
                                        y: `-${Math.min(activeStep, maxStep) * 100}vh`
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >

                                    {steps.map((step, index) => (

                                        <div
                                            key={step.id || index}
                                            className="process-pinned-scroll-step"
                                        >

                                            <div className="process-pinned-scroll-step-block grid">
                                                <div className="process-pinned-scroll-step-number h2">
                                                    {String(index + 1).padStart(2, "0")}
                                                </div>
                                                <div className="process-pinned-scroll-step-content grid">
                                                    {step.title && (
                                                        <h3 className="project-process-block-title">
                                                            {step.title}
                                                        </h3>
                                                    )}
                                                    {step.description && (
                                                        Array.isArray(step.description)
                                                            ? step.description.map((para, i) => (
                                                                <p key={i}>{para}</p>
                                                            ))
                                                            : <p>{step.description}</p>
                                                    )}
                                                </div>
                                            </div>

                                        </div>

                                    ))}

                                </motion.div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProcessPinnedScroll;
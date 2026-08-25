import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "./ProcessPinnedScroll.css";

function ProcessPinnedScroll({ children }) {

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const stepsY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-75%"]
    );

    return (
        <section
            ref={sectionRef}
            className="process-pinned-scroll"
        >

            <div className="std-wrapper">
                <div className="process-pinned-scroll-sticky">
                    <div className="process-pinned-scroll-content">
                        <div className="process-pinned-scroll-title">
                            {/* Title goes here */}
                            <h2>My Title</h2>
                        </div>
                        <div className="process-pinned-scroll-steps">
                            <motion.div
                                className="process-pinned-scroll-track"
                                style={{ y: stepsY }}
                            >
                                {children}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ProcessPinnedScroll;
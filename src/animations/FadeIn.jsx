import { motion } from "framer-motion";

function FadeIn ({ children, direction = "up", delay = 0, duration = 0.5,  once = true, blur = 10 }) {

    const directions = { up: { x: 0, y: 120 }, down: { x: 0, y: -120 }, left: { x: 120, y: 0 }, right: { x: -120, y: 0 }, };

    return (

        <motion.div
            initial={{ opacity: 0, ...directions[direction], filter: `blur(${blur}px)`, }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)", }}
            viewport={{ once, amount: 0.3, }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1], }}
        >
            {children}
        </motion.div>

    );

}

export default FadeIn;
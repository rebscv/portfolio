import { motion } from "framer-motion";

function FadeIn ({ children, direction = "up", delay = 0, duration = 1 }) {

    const directions = { up: { x: 0, y: 120 }, down: { x: 0, y: -120 }, left: { x: 120, y: 0 }, right: { x: -120, y: 0 }, };

    return (

        <motion.div
            initial={{ opacity: 0, ...directions[direction], }}
            whileInView={{ opacity: 1, x: 0, y: 0, }}
            viewport={{ once: false, amount: 0.2, }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1], }}
        >
            {children}
        </motion.div>

    );

}

export default FadeIn;
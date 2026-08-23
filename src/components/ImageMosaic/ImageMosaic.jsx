import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import "./ImageMosaic.css";

import bmwImg1 from "../../assets/welcome/bmw-1.webp";
import bmwImg2 from "../../assets/welcome/bmw-2.webp";
import fordImg1 from "../../assets/welcome/ford-1.webp";
import forthingImg1 from "../../assets/welcome/forthing-1.webp";
import maseratiImg1 from "../../assets/welcome/maserati-1.webp";
import mitsubishiImg1 from "../../assets/welcome/mitsubishi-1.webp";
import nissanImg1 from "../../assets/welcome/nissan-1.webp";
import skodaImg1 from "../../assets/welcome/skoda-1.webp";
import toyotaImg1 from "../../assets/welcome/toyota-1.webp";
import vwImg1 from "../../assets/welcome/vw-1.webp";
import pcImg1 from "../../assets/welcome/pc-1.webp";
import pcImg2 from "../../assets/welcome/pc-2.webp";
import pcImg3 from "../../assets/welcome/pc-3.webp";
import pcImg4 from "../../assets/welcome/pc-4.webp";
import razerImg1 from "../../assets/welcome/razer-1.webp";
import xpengImg1 from "../../assets/welcome/xpeng-1.webp";
import fotonImg1 from "../../assets/welcome/foton-1.webp";



const rows = [
    {
        direction: "left",
        images: [toyotaImg1, pcImg4, fordImg1, forthingImg1, maseratiImg1]
    },
    {
        direction: "right",
        images: [nissanImg1, pcImg1, skodaImg1, bmwImg1, vwImg1]
    },
    {
        direction: "left",
        images: [pcImg2, mitsubishiImg1, pcImg3, pcImg4, razerImg1, skodaImg1, fotonImg1 ]
    }
];


function MosaicRow({ images, direction, progress }) {

    const easedProgress = useSpring(progress, { stiffness: 80, damping: 20, mass: 0.5 });
    const x = useTransform( easedProgress, [0, 1], direction === "left" ? ["0%", "-12%"] : ["-12%", "0%"] );

    return (
        <div className="image-mosaic">
            <motion.div className="image-mosaic-row" style={{ x }}>

                {images.map((image, index) => ( <div className="image-mosaic-item" key={index}><img src={image} alt="" loading="lazy" /></div> ))}

            </motion.div>
        </div>
    );

}

function ImageMosaic() {

    const mosaicRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: mosaicRef, offset: ["start end", "end start"] });

    return (
        <div ref={mosaicRef} className="image-mosaic-container">
            {rows.map((row, index) => ( <MosaicRow key={index} {...row} progress={scrollYProgress} /> ))}
        </div>
    );
    
}

export default ImageMosaic;
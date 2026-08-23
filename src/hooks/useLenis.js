import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {

    useEffect(() => {
        const lenis = new Lenis({ duration: 0.8, smoothWheel: true, });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf); return () => { lenis.destroy(); } ;
    }, []);
}
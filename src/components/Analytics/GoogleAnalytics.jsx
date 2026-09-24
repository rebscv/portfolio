import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GoogleAnalytics() {

    const location = useLocation();

    useEffect(() => {        
        
        if (typeof window.gtag !== "function") return;
        window.gtag("config", "G-9HZRWMLBYB", { page_path: location.pathname + location.search, });

    }, [location]);

    return null;
}

export default GoogleAnalytics;
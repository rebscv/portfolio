import { useState } from "react";
import "./ImageLoader.css";

function ImageLoader({ src, alt, className = "" }) {

    const [isLoaded, setIsLoaded] = useState(false);

    return (

        <div className={`image-loader ${isLoaded ? "is-loaded" : ""} ${className}`}>
            

            <div className="image-loader-spinner"></div>
            <img src={src} alt={alt} onLoad={() => {
    setTimeout(() => {
        setIsLoaded(true);
    }, 10000);
}} />

        </div>

    )

}

export default ImageLoader;
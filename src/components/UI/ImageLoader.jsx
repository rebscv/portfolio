import { useState } from "react";
import "./ImageLoader.css";

function ImageLoader({ src, alt, width, height, loading = "lazy", className = "" }) {

    const [isLoaded, setIsLoaded] = useState(false);

    return (

        <div className={`image-loader ${isLoaded ? "is-loaded" : ""} ${className}`}>            

            <div className="image-loader-spinner"></div>
            <img loading={loading} src={src} alt={alt} width={width} height={height} onLoad={() => setIsLoaded(true)} />

        </div>

    )

}

export default ImageLoader;
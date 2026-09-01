import { Link } from "react-router-dom";

function HeaderNavbar() {

    return (
        <nav onClick={() => document.body.classList.remove("show-mobile-menu")}>
            <Link className="hide-desktop" to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <a href="#contact" className="smooth-scroll">Contact</a>
        </nav>
    );
}
    
export default HeaderNavbar;
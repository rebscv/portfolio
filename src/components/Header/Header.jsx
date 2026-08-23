import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-wht.svg";

function Header() {
    return (
        <header className="header">
            <div className="lrg-wrapper t-center">
                <div className="header-flex">

                    <Link className="logo" to="/">

                        <img src={logo} width="56" height="36" alt="" />
                        <div className="logo-pf">Portfolio</div>

                        <div className="logo-name">Reuven Vergara</div>
                        
                    </Link>

                    <nav>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>

                </div>
            </div>

        </header>
    );
}
    
export default Header;
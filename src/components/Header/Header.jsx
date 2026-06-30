import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="lrg-wrapper t-center">
                <div className="header-flex">

                    <Link className="h4" to="/">My Portfolio</Link>

                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                    </nav>

                </div>
            </div>

        </header>
    );
}
    
export default Header;
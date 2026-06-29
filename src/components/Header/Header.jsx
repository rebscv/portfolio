import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="lrg-wrapper t-center">

                <Link className="h4" to="/">My Portfolio</Link>

                <nav>
                    <Link to="/">Home</Link>
                </nav>

            </div>

        </header>
    );
}
    
export default Header;
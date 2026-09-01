import { Link } from "react-router-dom";

import HeaderNavbar from "./HeaderNavbar";
import "./Header.css";

import logo from "../../assets/logo-wht.svg";

function Header() {

    const toggleMobileMenu = () => { document.body.classList.toggle("show-mobile-menu"); };

    return (
        <header className="header">
            <div className="std-wrapper t-center">
                <div className="header-flex">

                    <Link className="logo" to="/">

                        <img src={logo} width="56" height="36" alt="" />
                        <div className="logo-pf">Portfolio</div>

                        <div className="logo-name">Reuven Vergara</div>
                        
                    </Link>

                    <div className="menu-button-mobile" onClick={toggleMobileMenu}>
                        <svg className="icon-menu"><use href="/icons.svg#icon-menu"></use></svg>
                    </div>

                    <HeaderNavbar />

                </div>
            </div>

            <div className="menu-mobile">
                <HeaderNavbar />                            
            </div>  

            <div className="menu-mobile-bg" onClick={() => document.body.classList.remove("show-mobile-menu")}></div>

        </header>
    );
}
    
export default Header;
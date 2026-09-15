import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./NotFound.css";

function NotFound() {

    return (

        <>
            <Header />        

            <main>
                <section className="content dark-bg blue-gradiant-top-bg">
                    <div className="sml-wrapper t-center">

                        <div className="grid page-not-found-grid">

                            <h1 className="h2">404 — Page not found.</h1>
                            <p>Hmmm... Looks like this page has gone missing. Let's get you back on track.</p>
                            <div>
                                <Link to="/" className="btn btn-outline">Back to homepage <svg className="icon-arrow-top-right"><use xlinkHref="/icons.svg#icon-arrow-top-right"></use></svg></Link>
                            </div>

                        </div>

                    </div>
                </section>
            </main>

        </>
        
    );

}

export default NotFound;
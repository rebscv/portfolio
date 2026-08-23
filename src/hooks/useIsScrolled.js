import { useEffect } from "react";

export default function useIsScrolled() {
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // At the top
            if (currentScrollY <= 0) {
                document.body.classList.remove("is-scrolled");
                document.body.classList.remove("header-hidden");
                document.body.classList.remove("header-fixed");
            }

            // Scrolling down
            else if (currentScrollY > lastScrollY) {

                // Start hiding header
                if (currentScrollY > 360) {
                    document.body.classList.add("is-scrolled");
                    document.body.classList.add("header-hidden");
                }

                // Header becomes fixed
                if (currentScrollY > 512) {
                    document.body.classList.add("header-fixed");
                    document.body.classList.remove("header-hidden");
                }
            }

            // Scrolling up
            else if (currentScrollY < lastScrollY) {

                // Show fixed header
                if (currentScrollY > 360) {
                    document.body.classList.add("header-fixed");
                    document.body.classList.remove("header-hidden");
                }

                // Return to normal header
                else {
                    document.body.classList.remove("is-scrolled");
                    document.body.classList.remove("header-fixed");
                    document.body.classList.remove("header-hidden");
                }
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
}
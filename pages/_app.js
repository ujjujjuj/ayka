import Aos from "aos";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-image-lightbox/style.css";
import "../styles/index.scss";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Aos.init({ duration: 750 });
        Aos.refresh();
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;

import Aos from "aos";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-image-lightbox/style.css";
import "../styles/index.scss";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Aos.init({ duration: 750 });
        Aos.refresh();
    }, []);

    return (
        <>
            <ToastContainer />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

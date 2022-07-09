import Link from "next/link";
import styles from "../styles/components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footerElem}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    {/* <h1>Ayka</h1> */}
                    <div className={styles.footerInfo}>
                        <h3>&#169;2022 Ayka</h3>
                        <h3>aykaforthepeople@gmail.com</h3>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <h3>Gurgaon, Haryana</h3>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <a
                            href="https://www.instagram.com/ayka_forthepeople/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.facebook.com/Ayka-111482238105032"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ayka-art-for-the-people/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/workshops">Workshops</Link>
                    <Link href="/paintings">Wall Paintings</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

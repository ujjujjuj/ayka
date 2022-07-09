import styles from "../styles/components/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ href, children, className, activeClass }) => {
    const router = useRouter();
    return (
        <Link href={href}>
            <a
                className={`${className || styles.navLink} ${
                    router.pathname == href ? activeClass || styles.activeNavLink : ""
                }`}
            >
                {children}
            </a>
        </Link>
    );
};

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        console.log(expanded);
    }, [expanded]);

    return (
        <nav className={styles.navElem}>
            <div className={styles.navContainer}>
                <div className={styles.navLeft}>
                    <NavLink href="/" activeClass="null" className={styles.navLogo}>
                        Ayka
                    </NavLink>
                </div>
                <div
                    className={styles.navRight}
                    style={expanded ? { transform: "translateY(100%)", display: "flex" } : {}}
                >
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/workshops">Workshops</NavLink>
                    <NavLink href="/paintings">Wall Paintings</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>
                <FontAwesomeIcon
                    icon={faBars}
                    className={styles.navMenuIcon}
                    onClick={() => setExpanded(!expanded)}
                />
            </div>
        </nav>
    );
};

export default Nav;

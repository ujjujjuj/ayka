import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

const CustomNavbar = () => {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm" style={{ zIndex: "999" }}>
            <Container className="w-100 mx-0 content-pad" fluid>
                <Navbar.Brand href="/" className="gentium">
                    Ayka
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 outline-0">
                    <i className="fa-solid fa-bars text-primary"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-lg-5 custom-nav gap-sm-4 gap-3 my-2">
                        <Link href="/" passHref>
                            Home
                        </Link>
                        <Link href="/about" passHref>
                            About
                        </Link>
                        <Link href="/workshops" passHref>
                            Workshops
                        </Link>
                        <Link href="/wallpaintings" passHref>
                            Wall Paintings
                        </Link>
                        <Link href="/blogs" passHref>
                            Blogs
                        </Link>
                        <Link href="/donate" passHref>
                            Donate
                        </Link>
                        <Link href="/contact" passHref>
                            Volunteer
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;

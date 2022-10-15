import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomNavbar = (props) => {
    const router = useRouter();
    console.log(router);
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
                    <Nav
                        className="ms-auto align-items-center gap-lg-5 custom-nav gap-sm-4 gap-3 my-2"
                        activeKey={router.pathname}
                    >
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                        <Link href="/workshops" passHref>
                            <Nav.Link>Workshops</Nav.Link>
                        </Link>
                        <Link href="/wallpaintings" passHref>
                            <Nav.Link>Wall Paintings</Nav.Link>
                        </Link>
                        <Link href="/blogs" passHref>
                            <Nav.Link>Blogs</Nav.Link>
                        </Link>
                        <Link href="/donate" passHref>
                            <Nav.Link>Donate</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link>Volunteer</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;

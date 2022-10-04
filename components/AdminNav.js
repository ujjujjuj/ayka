import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

const AdminNav = () => {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm" style={{ zIndex: "999" }}>
            <Container className="w-100 mx-0 content-pad" fluid>
                <Navbar.Brand href="/admin" className="gentium">
                    Ayka Admin
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 outline-0">
                    <i className="fa-solid fa-bars text-primary"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-4 custom-nav">
                        <Link href="/admin/" passHref>
                            Blogs
                        </Link>
                        <Link href="/admin/image" passHref>
                            Upload Image
                        </Link>
                        {/* <Link href="/admin/manage" passHref>
                            Manage accounts
                        </Link> */}
                        <Link href="/admin/password" passHref>
                            Change password
                        </Link>
                        <Link href="/admin/logout" passHref>
                            Logout
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNav;

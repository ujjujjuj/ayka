import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const CustomFooter = () => {
    return (
        <Container
            fluid
            className="bg-black section content-pad text-decoration-none justify-self-end"
            style={{ color: "rgba(255,255,255,0.7)" }}
        >
            <Row className="gap-5 flex-column flex-md-row justify-content-start">
                <Col xs="auto">
                    <div className="d-flex gap-xl-5 mb-4 flex-column flex-xl-row  align-items-start">
                        <p>
                            <i className="fa-regular fa-copyright"></i>&nbsp;&nbsp;2022 Ayka
                        </p>
                        <p>
                            <i className="fa-regular fa-envelope"></i>
                            &nbsp;&nbsp;aykaforthepeople@gmail.com
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Gurgaon, Haryana
                        </p>
                    </div>
                    <div className="d-flex gap-4">
                        <Link href="https://www.instagram.com/ayka_forthepeople/" target = "_blank" style={{ color: "inherit" }} passHref>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link href="https://www.facebook.com/Ayka-111482238105032" style={{ color: "inherit" }} passHref>
                            <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link href="https://chat.whatsapp.com/FEyOt1KQBbk8wcUTYQjN7r" style={{ color: "inherit" }} passHref>
                            <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                    </div>
                </Col>
                <Col className="d-flex flex-wrap gap-md-5 justify-content-md-end justify-content-start gap-4">
                    <Link href="/" style={{ color: "inherit" }}>
                        Home
                    </Link>
                    <Link href="/about" style={{ color: "inherit" }}>
                        About
                    </Link>
                    <Link href="/workshops" style={{ color: "inherit" }}>
                        Workshops
                    </Link>
                    <Link href="/wallpaintings" style={{ color: "inherit" }}>
                        Wall Paintings
                    </Link>
                    <Link href="/contact" style={{ color: "inherit" }}>
                        Contact
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomFooter;

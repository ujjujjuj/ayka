import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = () => {
    return (
        <Container
            fluid
            className="bg-black section content-pad text-decoration-none justify-self-end"
            style={{ color: "rgba(255,255,255,0.7)" }}
        >
            <Row className="gap-5 flex-column flex-md-row">
                <Col xs="auto">
                    <div className="d-flex gap-xl-5 mb-4 flex-column flex-xl-row">
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
                        <a href="https://instagram.com/" style={{ color: "inherit" }}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://facebook.com/" style={{ color: "inherit" }}>
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" style={{ color: "inherit" }}>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </Col>
                <Col className="d-flex flex-wrap gap-5 justify-content-end">
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                    <a href="home" style={{ color: "inherit" }}>
                        Home
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomFooter;

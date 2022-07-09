import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container, Button, Row, Col } from "react-bootstrap";

const WallPaintings = () => {
    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Row className="section-top pt-xl-6">
                    <Col
                        xs={12}
                        xl={7}
                        className="flex-center align-items-xl-start section gap-2 content-pad paint-bg pt-8 pt-xl-0"
                    >
                        <h1 className="gentium display-5">Wall Paintings</h1>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus numquam dolore maiores
                            sed dicta eligendi atque, incidunt excepturi, sequi quis corrupti deleniti quae minima
                            exercitationem quisquam culpa labore et quas voluptatibus provident distinctio repudiandae
                            qui at. Harum voluptatibus veritatis qui magni alias, quos possimus
                        </p>
                    </Col>
                </Row>
                <Row className="section">
                    <Col className="content-pad">
                        <h2 className="gentium">Outside a housing area</h2>
                        <h6>Tata Nagar, Jamshedpur</h6>
                        <div>
                            <small>
                                <i className="fa-regular fa-calendar"></i> 13th Januaury 2021
                            </small>
                        </div>
                        <div className="wp-gallery">
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="section bg-primary text-white">
                    <Col className="content-pad">
                        <h2 className="gentium">Daycare</h2>
                        <h6>Barinagar, Jamshedpur</h6>
                        <div>
                            <small>
                                <i className="fa-regular fa-calendar"></i> 13th Januaury 2021
                            </small>
                        </div>
                        <div className="wp-gallery">
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="section">
                    <Col className="content-pad">
                        <h2 className="gentium">Individual Requests</h2>
                        <div>
                            <small>
                                <i className="fa-regular fa-calendar"></i> 13th Januaury 2021
                            </small>
                        </div>
                        <div className="wp-gallery">
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                            <div>
                                <img src="/test1.jpg" alt="test" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};

export default WallPaintings;

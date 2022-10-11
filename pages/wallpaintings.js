import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container, Button, Row, Col } from "react-bootstrap";

const WallPaintings = () => {
    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Row className="section-top pt-xl-6 paint-bg text-center text-xl-start">
                    <Col
                        xs={12}
                        xl={7}
                        className="flex-center align-items-xl-start section gap-2 content-pad pt-5 pt-xl-0"
                        data-aos="fade-up"
                    >
                        <h1 className="gentium display-5">Wall Paintings</h1>
                        <p className="">
                            We paint walls in rural areas with awareness or cultural art in the form of interactive
                            workshops with underprivileged children. We aim to expand the world of art to rural areas by
                            painting panting walls with cultural or socially relevant art.
                        </p>
                    </Col>
                </Row>
                <Row className="section justify-content-center">
                    <Col className="content-pad">
                        <div data-aos="fade-up">
                            <h2 className="gentium">Outside a housing area</h2>
                            <h6>Tata Nagar, Jamshedpur</h6>
                            <div className="mb-4">
                                <small style={{ opacity: "0.5" }}>
                                    <i className="fa-regular fa-calendar"></i> 13th Januaury 2021
                                </small>
                            </div>
                        </div>
                        <div className="wp-gallery" data-aos="fade-up">
                            <div>
                                <img src="/media/wallpaintings/wall11.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall12.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall13.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall14.png" alt="test" />
                            </div>
                        </div>
                    </Col>
                    <Row className="flex-center text-center mt-5" data-aos="fade-up">
                        <Col xl={6} className="px-4">
                            Near a school, outside a housing area, we asked the kids what they can do to conserve the
                            environment and wrote them down with them on the wall. They put their hand prints as they
                            pledged to espouse cleanliness, afforestation and conserve water in their daily lives.
                        </Col>
                    </Row>
                </Row>
                <Row></Row>
                <Row className="section bg-primary text-white justify-content-center">
                    <Col className="content-pad">
                        <div data-aos="fade-up">
                            <h2 className="gentium">Daycare</h2>
                            <h6>Barinagar, Jamshedpur</h6>
                            <div className="mb-4">
                                <small style={{ opacity: "0.5" }}>
                                    <i className="fa-regular fa-calendar"></i> 14th Januaury 2021
                                </small>
                            </div>
                        </div>
                        <div className="wp-gallery" data-aos="fade-up">
                            <div>
                                <img src="/media/wallpaintings/wall21.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall22.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall23.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall24.png" alt="test" />
                            </div>
                        </div>
                    </Col>
                    <Row className="flex-center text-center mt-5" data-aos="fade-up">
                        <Col xl={6} className="px-4">
                            Painted at a daycare, a flower on request in their common room. The children watched in awe
                            and we were invited to tea by a lot of them. We did individual paintings on request in a few
                            houses in the same area!
                        </Col>
                    </Row>
                </Row>
                <Row className="section justify-content-center">
                    <Col className="content-pad">
                        <div data-aos="fade-up">
                            <h2 className="gentium">At little Palak&apos;s House</h2>
                            <div className="mb-4">
                                <small style={{ opacity: "0.5" }}>
                                    <i className="fa-regular fa-calendar"></i> 16th Januaury 2021
                                </small>
                            </div>
                        </div>
                        <div className="wp-gallery" data-aos="fade-up">
                            <div>
                                <img src="/media/wallpaintings/wall31.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall32.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall33.png" alt="test" />
                            </div>
                            <div>
                                <img src="/media/wallpaintings/wall34.png" alt="test" />
                            </div>
                        </div>
                    </Col>
                    <Row className="flex-center text-center mt-5 content-pad" data-aos="fade-up">
                        <Col xl={6} className="p-0">
                            We took up individual requests as the kids melted our hearts. Little Palak was our tour
                            guide in Barinagar. We painted at her house on request, a flower, a popular design due to
                            the famous mehendi art in the area. We matched it to her clothes, and she loved it!
                        </Col>
                    </Row>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};

export default WallPaintings;

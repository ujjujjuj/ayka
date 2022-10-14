import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container, Button, Row, Col } from "react-bootstrap";
import Router from "next/router";

const Donate = () => {
    return (
        <>
            <CustomNavbar />
            <Container fluid className="flex-grow-1 d-flex flex-column">
                <Row className="flex-grow-1">
                    <Col
                        xs={12}
                        xl={6}
                        className="flex-center align-items-xl-start section gap-2 content-pad paint-bg pt-8 pt-xl-0 text-center text-xl-start"
                    >
                        <div data-aos="fade-up">
                            <h1 className="gentium display-5">Donate</h1>
                            <p className="lh-md">
                                Your donation is an investment into the future of India. Every child we help educate
                                develops into more than just a student - they develop into a good human being. With our
                                ethics training and extracurricular support, every child gets the opportunity to grow
                                holistically!
                                <br />
                                The donors are the heart of every non-profit organisation, who enrich it and provide
                                support with the most important resources. Please feel free to contribute any amount you are comfortabl with
                                through any of the methods listed below.
                            </p>
                            <h2 className="mt-5 gentium">Bank Information</h2>
                            <div className="align-self-center">
                                <p className="mb-1 mt-2">fariya.maryam@okhdfcbank</p>
                                <p>Paytm - 8968960055</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={6} className="p-0 flex-center py-5">
                        <img
                            src="/media/donate/upiqr.png"
                            alt="UPI QR code"
                            style={{ width: "100%", maxWidth: "320px" }}
                        />
                    </Col>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};

export default Donate;

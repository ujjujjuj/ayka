import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";

const Contact = () => {
    return (
        <>
            <CustomNavbar />
            <Container
                fluid
                className="d-flex flex-grow-1 align-items-center text-white py-8 flex-column flex-xl-row px-xl-6 px-3 contact-container"
            >
                <Col
                    data-aos="fade-up"
                    xs={12}
                    xl={6}
                    className="d-flex flex-column gap-3 pe-xl-5  mb-5 mb-xl-0 text-center text-xl-start"
                    style={{ maxWidth: "85%" }}
                >
                    <h2 className="gentium display-6">Contact Us</h2>
                    <p>
                    Ayka is a volunteer-driven organisation, and we are always on the lookout for talent, 
                    commitment and passionate individuals. To join us or to work with us, get in touch with this form now!

                    </p>
                    <p>
                        <i className="fa-regular fa-envelope"></i>
                        &nbsp;&nbsp;aykaforthepeople@gmail.com
                    </p>
                </Col>
                <Col data-aos="fade-up" xs={12} xl={6} className="bg-white text-black p-4 p-sm-5">
                    <h2 className="gentium display-6 mb-5">Write Us</h2>
                    <form className="custom-form d-flex flex-column gap-4">
                        <input type="text" placeholder="Name / Organization Name" required className="w-100" />
                        <div className="d-flex gap-4 flex-column flex-sm-row">
                            <input type="text" placeholder="Email" required className="w-100" />
                            <input type="text" placeholder="Phone" className="w-100" />
                        </div>
                        <textarea
                            type="text"
                            placeholder="Message"
                            className="w-100"
                            required
                            style={{ height: "10rem", resize: "none" }}
                        ></textarea>
                        <input type="submit" value="Submit" className="align-self-end mt-4  " />
                    </form>
                </Col>
            </Container>

            <CustomFooter />
        </>
    );
};

export default Contact;

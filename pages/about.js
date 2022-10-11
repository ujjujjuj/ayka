import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import volunteerData from "../data/volunteers.json";
import testimonials from "../data/testimonials.json";

const About = () => {
    return (
        <>
            <CustomNavbar />
            <Container fluid className="flex-grow-1">
                <Row className="d-flex flex-column-reverse flex-xl-row align-items-center">
                    <Col xs={12} xl={6} className="p-0">
                        <img
                            src="/media/about/who.png"
                            alt="tests image"
                            className="d-block w-100 homeTopSwiperImage"
                            style={{ objectFit: "cover" }}
                        />
                    </Col>
                    <Col
                        xs={12}
                        xl={6}
                        className="justify-content-center content-pad text-custom section"
                        data-aos="fade-up"
                    >
                        <h2 className="section-heading">Who we are</h2>
                        <p className="lh-lg">
                            We are a youth-led nonprofit organisation committed towards the betterment of society. With
                            a strong belief in empowerment through skill-building, we strive for holistic quality
                            education and train young students in honing their creative talents and developing important
                            life skills through workshops and classes. We also paint murals in rural areas in the form
                            of interactive workshops with underprivileged children. With Delhi NCR as our Headquarters,
                            we now have branches in Kolkata, Mumbai, Pune, Chennai and Bangalore.
                        </p>
                    </Col>
                </Row>
                <Row className="bg-primary text-white align-items-center text-xl-start text-center">
                    <Col xs={12} xl={6} className="section content-pad" data-aos="fade-up">
                        <h2 className="section-heading">Our vision</h2>
                        <p className="lh-lg">
                            Ayka is on a mission to make art and culture accessible to rural areas by enriching
                            underprivileged children with creative and cultural knowledge through our workshops,
                            artworks, and numerous initiatives. Our entire team is highly passionate about giving these
                            kids a world of knowledge that would never have reached them otherwise, hopefully adding
                            some color and happiness to their lives.
                        </p>
                    </Col>
                    <Col xs={12} xl={6} className="p-0">
                        <img
                            src="/media/about/vision.png"
                            alt="tests image"
                            className="d-block w-100 homeTopSwiperImage"
                            style={{ objectFit: "cover" }}
                        />
                    </Col>
                </Row>
                <Row className="section text-center">
                    <h2 className="section-heading" data-aos="fade-up">
                        Our Team
                    </h2>
                    <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 px-6">
                        {volunteerData.map((vol, idx) => (
                            <PersonCard key={idx} person={vol} data-aos="fade-up" />
                        ))}
                    </div>
                </Row>
                <Row className="section flex-center text-center pink-bg">
                    <Col xl={6} data-aos="fade-up">
                        <h2 className="section-heading">We just don&apos;t do art, we believe in it.</h2>
                        <p>
                            Spreading joy with the help of our passion has always been the driving force for us. We want
                            to share this experience with every child we teach, every wall we paint.
                        </p>
                    </Col>
                </Row>
                <Row className="section text-center content-pad review-swiper">
                    <h2 className="section-heading" data-aos="fade-up">
                        Our Volunteers
                    </h2>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="text-white"
                        data-aos="fade-up"
                    >
                        {testimonials.map((testimonial, idx) => (
                            <SwiperSlide key={idx} className="flex-center">
                                <div
                                    className="bg-primary position-relative py-5 mx-4 px-4 px-md-7"
                                    style={{ maxWidth: "800px" }}
                                >
                                    <h2 className="gentium section-title fst-italic mb-4">“{testimonial.title}”</h2>
                                    <p>{testimonial.content}</p>
                                    <div
                                        className="position-absolute p-1 start-50 top-100 translate-middle"
                                        style={{ borderRadius: "999px", backgroundColor: "white" }}
                                    >
                                        <img
                                            src={`/members/${testimonial.author
                                                .toLowerCase()
                                                .replaceAll(" ", "-")}.jpg`}
                                            alt="person"
                                            style={{
                                                width: "85px",
                                                height: "85px",
                                                objectFit: "cover",
                                                borderRadius: "999px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <h4 className="mt-6 text-black">{testimonial.author}</h4>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};

const PersonCard = ({ person, ...props }) => {
    return (
        <div {...props}>
            <img
                src={`/members/${person.name.toLowerCase().replaceAll(" ", "-")}.jpg`}
                alt={person.name}
                style={{
                    height: "260px",
                    width: "260px",
                    objectFit: "cover",
                    borderRadius: "5px",
                }}
                className="mb-3"
            />
            <h4>{person.name}</h4>
            <p className="small">{person.position}</p>
        </div>
    );
};

export default About;

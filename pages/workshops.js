import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container, Button, Row, Col } from "react-bootstrap";
import Router from "next/router";

const featuresData = [
    {
        iconName: "fa-crosshairs",
        title: "Aim",
        text: "We paint on walls in run-down areas with cultural art or paintings pertaining to social or environmental issues.",
    },
    {
        iconName: "fa-crown",
        title: "Inspire",
        text: "We train young students in honing their creative talents. We paint on walls in run-down areas with cultural art or paintings pertaining to social or environmental ",
    },
    {
        iconName: "fa-user-group",
        title: "Expand",
        text: "Our workshops aim to nurture innovation and expression We paint on walls in run-down areas with cultural art or paintings pertaining to social or environmental ",
    },
];

const Workshops = () => {
    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Row className="">
                    <Col
                        xs={12}
                        xl={6}
                        className="flex-center align-items-xl-start section gap-2 content-pad paint-bg pt-8 pt-xl-0 text-center text-xl-start"
                    >
                        <div data-aos="fade-up">
                            <h1 className="gentium display-5">Workshops</h1>
                            <p className="lh-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus numquam dolore
                                maiores sed dicta eligendi atque, incidunt excepturi, sequi quis corrupti deleniti quae
                                minima exercitationem quisquam culpa labore et quas voluptatibus provident distinctio
                                repudiandae qui at. Harum voluptatibus veritatis qui magni alias, quos possimus
                            </p>
                        </div>
                        <div className="d-flex gap-4" data-aos="fade-up">
                            <Button
                                variant="outline-primary"
                                size="lg"
                                className="rounded-0"
                                onClick={() => Router.push("/contact")}
                            >
                                Volunteer
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} xl={6} className="p-0 me-n5">
                        <img
                            src="/media/workshops/top.png"
                            alt="tests image"
                            className="d-block w-100 homeTopSwiperImage"
                            style={{ objectFit: "cover" }}
                        />
                    </Col>
                </Row>
                <Row className="bg-primary text-white flex-center section">
                    <Col className="flex-center px-0" data-aos="fade-up">
                        <h2 className="gentium col-xl-8 text-center display-6 mb-5">
                            Ayka works towards holistic education of underprivileged children by&nbsp;
                            <i>skill-building</i> and <i>creative training</i>.
                        </h2>
                        <Row
                            xs={1}
                            sm={2}
                            xl={4}
                            className="d-flex w-100 content-pad text-center text-sm-start justify-content-around flex-wrap align-items-strech"
                            style={{ gap: "12px" }}
                        >
                            {featuresData.map((dat, idx) => (
                                <Col
                                    className="d-flex flex-column align-items-center align-items-sm-start bg-white text-black p-5 pb-4"
                                    key={idx}
                                    data-aos="fade-up"
                                >
                                    <div className="d-flex align-items-center mb-2">
                                        <i
                                            className={`fa-solid text-primary ${dat.iconName} mb-2 `}
                                            style={{ fontSize: "1.5rem" }}
                                        ></i>
                                        <h4 className="text-primary ps-2 ">{dat.title}</h4>
                                    </div>
                                    <p className="mb-5">{dat.text}</p>
                                    <hr
                                        style={{ height: "2px", width: "36%" }}
                                        className="mx-auto mt-auto justify-self-end"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Row className="section flex-center p-0">
                    <h2 className="section-heading content-pad text-center mb-6" data-aos="fade-up">
                        Latest Workshops
                    </h2>
                    <Row className="gap-8 workshop-container p-0">
                        <Row>
                            <Col className="h-100 order-xl-1">
                                <div className="workshop-text h-100 d-flex flex-column justify-content-center py-7">
                                    <div data-aos="fade-up">
                                        <h2 className="gentium display-6">Cartooning</h2>
                                        <h6 className="mb-5">With Nanhe Khwab NGO, Gurgaon</h6>
                                        <p>
                                            Up on his horse, up on his horse not gonna wake up here anymore listen one
                                            time, its not the truth its just a story i tell to you easy to say, easy to
                                            do but its not easy, well, maybe for you hope that Up on his horse, up on
                                            his horse not gonna wake up here anymore listen one time, its not the truth
                                            its just a story i tell to you easy to say, easy to do but its not easy,
                                            well, maybe for you hope that Up on his horse, up on his horse not gonna
                                            wake up here anymore listen one time, its not the truth its just a story i
                                            tell to you easy to say, easy to do but its not easy, well, maybe for you
                                            hope that
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-4 my-auto workshop-images order-xl-0">
                                <Row className="align-items-center gap-3">
                                    <Col className="p-0 flex-center gap-3">
                                        <img
                                            className="w-100 double-img"
                                            src="test2.jpg"
                                            alt="Wall hangning"
                                            data-aos="fade-up"
                                        />
                                        <img
                                            className="w-100 double-img"
                                            src="test1.jpg"
                                            alt="Wall hangning"
                                            data-aos="fade-up"
                                        />
                                    </Col>
                                    <Col className="p-0 ">
                                        <img
                                            className="w-100  single-img"
                                            src="test1.jpg"
                                            alt="Wall hangning"
                                            data-aos="fade-up"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="h-100">
                                <div className="workshop-text h-100 d-flex flex-column justify-content-center py-7">
                                    <div data-aos="fade-up">
                                        <h2 className="gentium display-6">Lantern Making</h2>
                                        <h6 className="mb-5">With Aaghaaz-E-Taaleem, Shram Vihar, Delhi</h6>
                                        <p>
                                            Up on his horse, up on his horse not gonna wake up here anymore listen one
                                            time, its not the truth its just a story i tell to you easy to say, easy to
                                            do but its not easy, well, maybe for you hope that Up on his horse, up on
                                            his horse not gonna wake up here anymore listen one time, its not the truth
                                            its just a story i tell to you easy to say, easy to do but its not easy,
                                            well, maybe for you hope that Up on his horse, up on his horse not gonna
                                            wake up here anymore listen one time, its not the truth its just a story i
                                            tell to you easy to say, easy to do but its not easy, well, maybe for you
                                            hope that
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-4 my-auto workshop-images">
                                <Row className="align-items-center gap-3">
                                    <Col className="p-0">
                                        <img
                                            className="w-100  single-img"
                                            src="test1.jpg"
                                            alt="Wall hangning"
                                            data-aos="fade-up"
                                        />
                                    </Col>
                                    <Col className="p-0 flex-center gap-3">
                                        <img
                                            className="w-100 double-img"
                                            src="test2.jpg"
                                            alt="Wall hangning"
                                            data-aos="fade-up"
                                        />
                                        <img
                                            className="w-100 double-img"
                                            src="test1.jpg"
                                            alt="Wall hangning"
                                            data-aos="fade-up"
                                        />
                                    </Col>
                                </Row>
                                <div></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="h-100 order-xl-1">
                                <div className="workshop-text d-flex h-100 flex-column justify-content-center py-7">
                                    <div data-aos="fade-up">
                                        <h2 className="gentium display-6">Warli Art</h2>
                                        <h6 className="mb-5">Online Workshop</h6>
                                        <p>
                                            Up on his horse, up on his horse not gonna wake up here anymore listen one
                                            time, its not the truth its just a story i tell to you easy to say, easy to
                                            do but its not easy, well, maybe for you hope that Up on his horse, up on
                                            his horse not gonna wake up here anymore listen one time, its not the truth
                                            its just a story i tell to you easy to say, easy to do but its not easy,
                                            well, maybe for you hope that Up on his horse, up on his horse not gonna
                                            wake up here anymore listen one time, its not the truth its just a story i
                                            tell to you easy to say, easy to do but its not easy, well, maybe for you
                                            hope that
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-4 my-auto order-xl-0">
                                <img
                                    className="w-100"
                                    src="/media/workshops/warli.png"
                                    alt="Wall hanging"
                                    data-aos="fade-up"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="h-100">
                                <div className="workshop-text h-100 d-flex flex-column justify-content-center py-7">
                                    <div data-aos="fade-up">
                                        <h2 className="gentium display-6">Wall Hangings</h2>
                                        <h6 className="mb-5">With Aaghaaz-E-Taaleem, Shram Vihar, Delhi</h6>
                                        <p>
                                            Up on his horse, up on his horse not gonna wake up here anymore listen one
                                            time, its not the truth its just a story i tell to you easy to say, easy to
                                            do but its not easy, well, maybe for you hope that Up on his horse, up on
                                            his horse not gonna wake up here anymore listen one time, its not the truth
                                            its just a story i tell to you easy to say, easy to do but its not easy,
                                            well, maybe for you hope that Up on his horse, up on his horse not gonna
                                            wake up here anymore listen one time, its not the truth its just a story i
                                            tell to you easy to say, easy to do but its not easy, well, maybe for you
                                            hope that
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="py-4 my-auto">
                                <img
                                    className="w-100"
                                    src="/media/workshops/wallhanging.png"
                                    alt="Wall hanging"
                                    data-aos="fade-up"
                                />
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};

export default Workshops;

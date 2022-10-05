import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Container, Col, Row, Button } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import CustomNavbar from "../components/CustomNavbar";
import { useEffect, useState } from "react";
import CustomFooter from "../components/CustomFooter";
import Router from "next/router";
import Head from "next/head";

const topCarouselData = Array(3).fill({ src: "/media/home/fryer.png", alt: "Fariya Maryam" });
const workshopData = [
    { src: "/media/home/work1.png", alt: "Fariya Maryam" },
    { src: "/media/home/work2.png", alt: "Fariya Maryam" },
    { src: "/media/home/work3.png", alt: "Fariya Maryam" },
    { src: "/media/home/work4.png", alt: "Fariya Maryam" },
    { src: "/media/home/work5.png", alt: "Fariya Maryam" },
];
const featuresData = [
    {
        iconName: "fa-palette",
        title: "Artification",
        text: "We paint on walls in run-down areas with cultural art or paintings pertaining to social or environmental issues.",
    },
    {
        iconName: "fa-brain",
        title: "Upskill",
        text: "We train young students in honing their creative talents.",
    },
    {
        iconName: "fa-hand-holding-heart",
        title: "Nurture",
        text: "Our workshops aim to nurture innovation and expression",
    },
    {
        iconName: "fa-hand-fist",
        title: "Empower",
        text: "We believe in empowering through skill-building and enriching creative expression.",
    },
];
const imageData = [
    { size: 6, src: "/media/home/gal1.png", alt: "Caption 1" },
    { size: 3, src: "/media/home/gal2.png", alt: "Caption 2" },
    { size: 3, src: "/media/home/gal3.png", alt: "Caption 3" },
    { size: 3, src: "/media/home/gal4.png", alt: "Caption 4" },
    { size: 3, src: "/media/home/gal5.png", alt: "Caption 5" },
    { size: 6, src: "/media/home/gal6.png", alt: "Caption 6" },
];
const statsData = [
    { name: "Workshops", amt: 22 },
    { name: "Workshops", amt: 22 },
    { name: "Workshops", amt: 22 },
    { name: "Workshops", amt: 22 },
];

const sdgGallery = [
    { src: "/media/home/gal1.png", alt: "Some text here" },
    { src: "/media/home/gal2.png", alt: "Some text here" },
    { src: "/media/home/gal1.png", alt: "Some text here" },
    { src: "/media/home/gal2.png", alt: "Some text here" },
    { src: "/media/home/gal1.png", alt: "Some text here" },
];

const sponsorsData = ["aaghaz-e-taleem.jpg", "nanhe-khwab.jpg"];

const getIndex = (index, max) => {
    if (!max) max = imageData.length;
    if (index >= max) index = 0;
    if (index < 0) index = max - 1;
    return index;
};

const Home = () => {
    const [activeImage, setActiveImage] = useState(null);

    const onImageContainerClick = (e) => {
        setActiveImage(parseInt(e.target.getAttribute("data-id")));
    };

    useEffect(() => {
        console.log(activeImage);
    }, [activeImage]);

    return (
        <>
            <Head>
                <title>Ayka | Home</title>
            </Head>
            <CustomNavbar />
            <Container fluid>
                <Row className="">
                    <Col
                        xs={12}
                        xl={6}
                        className="flex-center align-items-xl-start section gap-2 content-pad paint-bg section text-center text-xl-start"
                    >
                        <div data-aos="fade-up">
                            <h1 className="gentium display-5">
                                <i>Art</i> for the people, of the people, by the people
                            </h1>
                            <p className="">
                            We are a youth-led nonprofit organisation committed towards the betterment of society with a strong belief in empowerment through skill-building, we strive for holistic quality education and train young students in honing their creative talents. 
                            </p>
                        </div>
                        <div className="d-flex gap-4" data-aos="fade-up">
                            <Button
                                variant="primary"
                                size="lg"
                                className="rounded-0"
                                onClick={() => Router.push("/about")}
                            >
                                Explore
                            </Button>
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
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                        >
                            {topCarouselData.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="d-block w-100 homeTopSwiperImage"
                                        style={{ objectFit: "cover" }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
                <Row className="bg-primary text-white flex-center section">
                    <Col className="flex-center px-0" data-aos="fade-up">
                        <h2 className="gentium col-xl-8 text-center display-6 mb-5 px-4">
                            Ayka works towards holistic education of underprivileged children by&nbsp;
                            <i>skill-building</i> and <i>creative training</i>.
                        </h2>
                        <Row
                            xs={1}
                            sm={2}
                            xl={4}
                            className="d-flex w-100 gy-5 content-pad text-center text-sm-start justify-content-around align-items-center"
                        >
                            {featuresData.map((dat, idx) => (
                                <Col
                                    key={idx}
                                    className="d-flex flex-column align-items-center align-items-sm-start features-data-home"
                                >
                                    <i
                                        className={`fa-solid ${dat.iconName} green mb-2`}
                                        style={{ fontSize: "1.8rem" }}
                                    ></i>
                                    <h5 className="green">{dat.title}</h5>
                                    <p>{dat.text} </p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Row
                    className="bg-secondary flex-center section"
                    style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
                >
                    <Row className="d-flex justify-content-center mb-5" data-aos="fade-up">
                        <Col className="col-xl-6 text-center px-4">
                            <h2 className="gentium text-center display-6">
                                Skill-building <i>workshops</i> for students
                            </h2>
                            <p className="">
                                We conduct skill-building workshops with students to aid in creativity and training in
                                addition to education across many art mediums such as cartooning, Lantern-Making, Wall
                                Hangings, Warli Art.
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                className="rounded-0"
                                onClick={() => Router.push("/workshops")}
                            >
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                    <Row className="gx-0 w-100" data-aos="fade-up">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={32}
                            loop={true}
                            centeredSlides={true}
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {workshopData.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="d-block w-100 workshop-swiper-home"
                                        style={{ objectFit: "cover" }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Row>
                </Row>
                <Row className="section flex-center paint-bg" data-aos="fade-up">
                    <Col className="col-xl-6 text-center">
                        <h2 className="section-heading text-centerdiv">
                            We <i>paint walls</i> around rural areas for beautification, awareness and on requests.
                        </h2>
                        <Button
                            variant="primary"
                            size="lg"
                            className="rounded-0"
                            onClick={() => Router.push("/wallpaintings")}
                        >
                            Learn More
                        </Button>
                    </Col>
                </Row>
                <Row className="p-0 paintingGallery" onClick={onImageContainerClick} data-aos="fade-up">
                    {imageData.map((img, idx) => (
                        <Col
                            key={idx}
                            xs={2 * img.size}
                            xl={img.size}
                            className="p-0"
                            style={{ height: "400px" }}
                            data-title={img.alt}
                            data-id={idx}
                        >
                            <img src={img.src} alt={img.alt} className="w-100 h-100 fit-cover" />
                        </Col>
                    ))}
                </Row>
                {activeImage !== null && (
                    <Lightbox
                        mainSrc={imageData[activeImage].src}
                        imageTitle={imageData[activeImage].alt}
                        imageCaption={imageData[activeImage].alt}
                        nextSrc={imageData[getIndex(activeImage + 1)].src}
                        prevSrc={imageData[getIndex(activeImage - 1)].src}
                        onCloseRequest={() => setActiveImage(null)}
                        onMovePrevRequest={() => setActiveImage(getIndex(activeImage - 1))}
                        onMoveNextRequest={() => setActiveImage(getIndex(activeImage + 1))}
                    />
                )}
                <Row className="section bg-primary text-white row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-6">
                    {statsData.map((stat, idx) => (
                        <Col className="flex-center p-0" key={idx} data-aos="fade-up">
                            <p className="green display-1 gentium">{stat.amt}</p>
                            <p className="lead">{stat.name}</p>
                        </Col>
                    ))}
                </Row>
                <Row className="section flex-center row-cols-1 paint-bg pb-0">
                    <Col className="col-xl-6 text-center">
                        <h2 className="section-heading text-centerdiv pb-4">
                            We believe. We care. Our vision extends to making the world a better place to live in{" "}
                        </h2>
                    </Col>
                    <Row className="p-0 sdgGallery" data-aos="fade-up">
                        {sdgGallery.map((img, idx) => (
                            <Col key={idx} className="p-0" style={{ height: "400px" }} data-title={img.alt}>
                                <img src="/media/home/sdg1.png" alt={img.alt} />
                                <img src={img.src} alt={img.alt} className="w-100 h-100 fit-cover" />
                            </Col>
                        ))}
                    </Row>
                </Row>
                <Row className="section flex-center row-cols-1">
                    <Col className="flex-center col-xl-6 text-center mb-6" data-aos="fade-up">
                        <h2 className="gentium display-6 mb-4">Our partners and Collaborators</h2>
                    </Col>
                    <Col className="flex-center flex-row gap-8 flex-wrap" data-aos="fade-up">
                        {sponsorsData.map((sponsor, idx) => (
                            <img key={idx} src={sponsor} style={{ width: "min(90vw,280px)" }} alt={sponsor} />
                        ))}
                    </Col>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};

export default Home;

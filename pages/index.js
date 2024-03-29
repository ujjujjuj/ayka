import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Container, Col, Row, Button } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import CustomNavbar from "../components/CustomNavbar";
import { useEffect, useMemo, useState, useRef } from "react";
import CustomFooter from "../components/CustomFooter";
import Router from "next/router";
import Head from "next/head";
import sdgList from "../data/sdg.json";

const topCarouselData = [
    { src: "/media/home/landing1.jpg", home: "Landing image" },
    { src: "/media/home/landing2.jpg", home: "Landing image" },
    { src: "/media/home/landing3.jpg", home: "Landing image" },
    { src: "/media/home/landing4.jpg", home: "Landing image" },
];
const workshopData = [
    // { src: "/media/home/work1.png", alt: "Workshop" },
    { src: "/media/home/work2.png", alt: "Workshop" },
    { src: "/media/home/work3.png", alt: "Workshop" },
    { src: "/media/home/work4.png", alt: "Workshop" },
    { src: "/media/home/work5.png", alt: "Workshop" },
    { src: "/media/home/work6.png", alt: "Workshop" },
    { src: "/media/home/work7.png", alt: "Workshop" },
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
    { size: 6, src: "/media/home/gal1.png", alt: "Food donation drive" },
    { size: 3, src: "/media/home/gal2.png", alt: "Food donation drive" },
    { size: 3, src: "/media/home/gal3.png", alt: "Cartooning workshop " },
    { size: 3, src: "/media/home/gal4.png", alt: "Wall painting outside housing area" },
    { size: 3, src: "/media/home/gal5.png", alt: "Latern-making workshop" },
    { size: 6, src: "/media/home/gal6.png", alt: "Diwali donation drive and workshop" },
];
const statsData = [
    { name: "Workshops", amt: 50 },
    { name: "Wall Paintings", amt: 60 },
    { name: "Cities", amt: 8 },
    { name: "Members", amt: 500 },
];

const sponsorsData = ["aaghaz-e-taleem.jpg", "nanhe-khwab.jpg", "anadi.png"];

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

    return (
        <>
            <Head>
                <title>Ayka | Home</title>
            </Head>
            <CustomNavbar />
            <Container fluid>
                <Row className="">
                    <Col xs={12} xl={6} className="flex-center align-items-xl-start section gap-2 content-pad paint-bg section text-center text-xl-start">
                        <div data-aos="fade-up">
                            <h1 className="gentium display-5">
                                <i>Art</i> for the people, of the people, by the people
                            </h1>
                            <p className="">
                                We are a youth-led nonprofit organisation committed towards the betterment of society.
                                <br />
                                With a strong belief in empowerment through skill-building, we strive for holistic quality education and train young students in
                                honing their creative talents and developing important life skills through workshops and classes. We also paint murals in rural
                                areas in the form of interactive workshops with underprivileged children.
                            </p>
                        </div>
                        <div className="d-flex gap-4" data-aos="fade-up">
                            <Button variant="primary" size="lg" className="rounded-0" onClick={() => Router.push("/about")}>
                                Explore
                            </Button>
                            <Button variant="outline-primary" size="lg" className="rounded-0" onClick={() => Router.push("/contact")}>
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
                                    <img src={img.src} alt={img.alt} className="d-block w-100 homeTopSwiperImage" style={{ objectFit: "cover" }} />
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
                        <Row xs={1} sm={2} xl={4} className="d-flex w-100 gy-5 content-pad text-center text-sm-start justify-content-around align-items-center">
                            {featuresData.map((dat, idx) => (
                                <Col key={idx} className="d-flex flex-column align-items-center align-items-sm-start features-data-home">
                                    <i className={`fa-solid ${dat.iconName} green mb-2`} style={{ fontSize: "1.8rem" }}></i>
                                    <h5 className="green">{dat.title}</h5>
                                    <p>{dat.text} </p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-secondary flex-center section" style={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}>
                    <Row className="d-flex justify-content-center mb-5" data-aos="fade-up">
                        <Col className="col-xl-6 text-center px-4">
                            <h2 className="gentium text-center display-6">
                                Skill-building <i>workshops</i> for students
                            </h2>
                            <p className="">
                                We conduct skill-building workshops with students to aid in creativity and training in addition to education across many art
                                mediums such as cartooning, Lantern-Making, Wall Hangings, Warli Art.
                            </p>
                            <Button variant="primary" size="lg" className="rounded-0" onClick={() => Router.push("/workshops")}>
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
                                // <div key={idx}>
                                <SwiperSlide key={idx}>
                                    <img src={img.src} alt={img.alt} className="d-block w-100 workshop-swiper-home" style={{ objectFit: "cover" }} />
                                </SwiperSlide>
                                // </div>
                            ))}
                        </Swiper>
                    </Row>
                </Row>
                <Row className="section flex-center paint-bg" data-aos="fade-up">
                    <Col className="col-xl-6 text-center">
                        <h2 className="section-heading text-centerdiv">
                            We <i>paint walls</i> around rural areas for beautification, awareness and on requests.
                        </h2>
                        <Button variant="primary" size="lg" className="rounded-0" onClick={() => Router.push("/wallpaintings")}>
                            Learn More
                        </Button>
                    </Col>
                </Row>
                <Row className="p-0 paintingGallery" onClick={onImageContainerClick} data-aos="fade-up">
                    {imageData.map((img, idx) => (
                        <Col key={idx} xs={2 * img.size} xl={img.size} className="p-0" style={{ height: "400px" }} data-title={img.alt} data-id={idx}>
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
                        <AnimatingStat stat={stat} key={idx} />
                    ))}
                </Row>
                <Row className="section flex-center row-cols-1 paint-bg pb-0">
                    <Col className="col-xl-6 text-center">
                        <h2 className="section-heading text-centerdiv pb-4">
                            We believe. We care. Our vision extends to making the world a better place to live in
                        </h2>
                    </Col>
                </Row>
                <Row className="section bg-secondary d-flex flex-wrap align-items-start justify-content-center  content-pad gap-6">
                    {sdgList.map((sdg, idx) => (
                        <Col
                            key={idx}
                            className="d-flex flex-column align-items-center bg-white p-0"
                            style={{ minWidth: "300px", maxWidth: "300px", height: "360px" }}
                        >
                            <img
                                src={`/sdgs/E-WEB-Goal-${sdg.id.toString().padStart(2, "0")}.png`}
                                alt="SDG"
                                className="align-self-start"
                                style={{ width: "42%", objectFit: "cover" }}
                            />
                            <div className="m-5 my-4">
                                <h5>{sdg.title}</h5>
                                <div className="bg-black my-3" style={{ height: "2px", width: "33%", borderRadius: "999px", opacity: 0.4 }}></div>
                                <p>{sdg.content}</p>
                            </div>
                        </Col>
                    ))}
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

const AnimatingStat = ({ stat }) => {
    const STEPS = 42;
    const TIMEMS = 1500 + Math.random() * 1000 - 500;
    const [amount, setAmount] = useState(0);

    const elemRef = useRef();
    let isVisible = false;
    isVisible = useIsVisible(elemRef);
    const intervalRef = useRef();

    useEffect(() => {
        if (!isVisible) {
            setAmount(0);
        } else {
            intervalRef.current = setInterval(() => {
                setAmount((_amount) => {
                    if (_amount > stat.amt) {
                        clearInterval(intervalRef.current);
                        return stat.amt;
                    }
                    return _amount + stat.amt / STEPS;
                });
            }, TIMEMS / STEPS);
        }
        return () => clearInterval(intervalRef.current);
    }, [isVisible, stat]);

    useEffect(() => {
        if (Math.floor(amount) == stat.amt) clearInterval(intervalRef.current);
    }, [amount, stat.amt]);

    return (
        <Col className="flex-center p-0" data-aos="fade-up">
            <p className="green display-1 gentium" ref={elemRef}>
                {parseInt(amount)}+
            </p>
            <p className="lead">{stat.name}</p>
        </Col>
    );
};

const useIsVisible = (ref) => {
    if (typeof window === "undefined") return false;
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
};

export default Home;

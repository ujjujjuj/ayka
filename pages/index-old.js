import styles from "../styles/pages/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPalette,
    faArrowTrendUp,
    faHandHoldingHeart,
    faHandBackFist,
} from "@fortawesome/free-solid-svg-icons";

const topCarouselImages = [
    "https://via.placeholder.com/700x1000",
    "https://via.placeholder.com/400x1000",
    "https://via.placeholder.com/500x1000",
];
const bottomCarouselImages = [
    "https://via.placeholder.com/350x500",
    "https://via.placeholder.com/351x500",
    "https://via.placeholder.com/352x500",
    "https://via.placeholder.com/353x500",
    "https://via.placeholder.com/354x500",
    "https://via.placeholder.com/355x500",
    "https://via.placeholder.com/356x500",
    "https://via.placeholder.com/357x500",
];
const galleryImages = [
    ["https://via.placeholder.com/1000x500", "Daycare1", "This picture was clicked at daycare1", 2],
    ["https://via.placeholder.com/501x1000", "Daycare2", "This picture was clicked at daycare2", 1],
    ["https://via.placeholder.com/502x1000", "Daycare3", "This picture was clicked at daycare3", 1],
    ["https://via.placeholder.com/503x1000", "Daycare4", "This picture was clicked at daycare4", 1],
    ["https://via.placeholder.com/504x1000", "Daycare5", "This picture was clicked at daycare5", 1],
    ["https://via.placeholder.com/1000x505", "Daycare6", "This picture was clicked at daycare6", 2],
];

export default function Home() {
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        const onContainerClick = (e) => {
            console.log(e.target.getAttribute("data-id"));
            setActiveImage(parseInt(e.target.getAttribute("data-id")));
        };
        const imageContainers = document.querySelectorAll(`.${styles.paintingGallery} > div`);
        imageContainers.forEach((imageElement) =>
            imageElement.addEventListener("click", onContainerClick)
        );
        return () => {
            imageContainers.forEach((imageElement) =>
                imageElement.removeEventListener("click", onContainerClick)
            );
        };
    }, []);

    const getIndex = (index, max) => {
        if (!max) max = galleryImages.length;
        if (index >= max) index = 0;
        if (index < 0) index = max - 1;
        return index;
    };

    return (
        <>
            <Head>
                <title>Home | Ayka</title>
            </Head>
            <Nav />
            <div className={styles.mainContainer}>
                <div className={styles.topBanner}>
                    <div className={styles.topLeft}>
                        <div className={styles.topInfo}>
                            <h1>
                                <ital>Art</ital>&nbsp;for the people, of the people, by the people
                            </h1>
                            <h3>
                                Up on his horse, up on his horse not gonna wake up here anymore
                                listen one time, its not the truth its just a story i tell to you
                                easy to say, easy to do but its not easy, well, maybe for you hope
                                that you find it, hope that its good hope on his horse, up on his
                                horse not gonna wake up here anymore listen one time, its not the
                                truth its just a.
                            </h3>
                            <div className={styles.topButtons}>
                                <Button fill href="/explore">
                                    Explore
                                </Button>
                                <Button href="/volunteer">Volunteer</Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.topRight}>
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                                bulletClass:styles.swiperPaginationBullet,
                                bulletActiveClass:styles.swiperPaginationBulletActive
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination]}
                            className={styles.topSwiper}

                        >
                            {topCarouselImages.map((imgSrc, idx) => (
                                <SwiperSlide className={styles.swiperSlide} key={idx}>
                                    <Image src={imgSrc} layout="fill" alt="Workshop image" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className={styles.aboutDiv}>
                    <h1 data-aos="fade-up">
                        Ayka works towards holistic education of underprivileged children by&nbsp;
                        <ital>skill-building</ital>&nbsp;and&nbsp;<ital>creative training</ital>.
                    </h1>
                    <div className={styles.aboutList} data-aos="fade-up">
                        <div>
                            <FontAwesomeIcon icon={faPalette} />
                            <h4>Artification</h4>
                            <h6>
                                We paint on walls in run-down areas with cultural art or paintings
                                pertaining to social or environmental issues.
                            </h6>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                            <h4>Upskill</h4>
                            <h6>We train young students in honing their creative talents.</h6>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                            <h4>Nurture</h4>
                            <h6>Our Workshops aim to nurture innovation and expression</h6>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHandBackFist} />
                            <h4>Empower</h4>
                            <h6>
                                We believe in empowering through skill-building and enriching
                                creative expression.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className={styles.workshopAbout}>
                    <div className={styles.workshopText} data-aos="fade-up">
                        <h1>
                            Skill-building&nbsp;<ital>workshops</ital>&nbsp;for students
                        </h1>
                        <h3>
                            We conduct skill-building workshops with students to aid in creativity
                            and training in addition to education across many art mediums such as
                            cartooning, Lantern-Making, Wall Hangings, Warli Art
                        </h3>
                        <Button href="/workshops" fill color="black">
                            Learn More
                        </Button>
                    </div>
                    <Swiper
                        data-aos="fade-up"
                        className={styles.workshopSwiper}
                        slidesPerView={4}
                        spaceBetween={32}
                        loop={true}
                        // roundLengths={true}
                        centeredSlides={true}
                        loopFillGroupWithBlank={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {bottomCarouselImages.map((imgSrc, idx) => (
                            <SwiperSlide className={styles.swiperSlide} key={idx}>
                                <Image src={imgSrc} alt="workshop image" layout="fill" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.paintingAbout}>
                    <div className={styles.paintingText} data-aos="fade-up">
                        <h1>
                            We&nbsp;<ital>paint walls</ital>&nbsp;around rural areas for
                            beautification, awareness and on requests.
                        </h1>
                        <Button href="/" fill>
                            Learn More
                        </Button>
                    </div>
                    <div className={styles.paintingGallery} data-aos="fade-up">
                        {galleryImages.map(([imgSrc, title, caption, imgWidth], idx) => (
                            <div
                                data-title={title} // actual title
                                title={caption} // hover
                                key={idx}
                                className={
                                    imgWidth == 1
                                        ? styles.gallerySingle
                                        : imgWidth == 2
                                        ? styles.galleryDouble
                                        : styles.galleryTriple
                                }
                                data-id={idx}
                            >
                                <Image src={imgSrc} alt={title} layout="fill" />
                            </div>
                        ))}
                        {activeImage !== null && (
                            <Lightbox
                                mainSrc={galleryImages[activeImage][0]}
                                imageTitle={galleryImages[activeImage][1]}
                                imageCaption={galleryImages[activeImage][2]}
                                nextSrc={galleryImages[getIndex(activeImage + 1)][0]}
                                prevSrc={galleryImages[getIndex(activeImage - 1)][0]}
                                onCloseRequest={() => setActiveImage(null)}
                                onMovePrevRequest={() => setActiveImage(getIndex(activeImage - 1))}
                                onMoveNextRequest={() => setActiveImage(getIndex(activeImage + 1))}
                            />
                        )}
                    </div>
                    <div className={styles.paintingStatistics}>
                        <div>
                            <h1>22</h1>Workshops
                        </div>
                        <div>
                            <h1>22</h1>Workshops
                        </div>
                        <div>
                            <h1>22</h1>Workshops
                        </div>
                        <div>
                            <h1>22</h1>Workshops
                        </div>
                    </div>
                </div>
                <div className={styles.partners}>
                    <div className={styles.partnersText} data-aos="fade-up">
                        <h1>Our partners and collaborators</h1>
                        <h3>
                            Up on his horse, up on his horse not gonna wake up here anymore listen
                            one time, its not the truth its just a story i tell to you easy to say,
                            easy to do but its not easy,
                        </h3>
                    </div>
                    <div className={styles.partnersImages} data-aos="fade-up">
                        <img
                            src="/nanhe-khwab.jpg"
                            title="Nanhe Khwab"
                            width={320}
                            height={320}
                            alt="Nanhe Khwab"
                        />
                        <img
                            src="/aaghaz-e-taleem.jpg"
                            title="Aaghaz e Taleem"
                            alt="Aaghaz e Taleem"
                            width={320}
                            height={320}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

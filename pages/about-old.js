import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from "../styles/pages/About.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

const teamData = [
    {
        name: "Fariya Maryam",
        position: "Executive Director",
        photo: "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
    {
        name: "Fariya Maryam",
        position: "Executive Director",
        photo: "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
    {
        name: "Fariya Maryam",
        position: "Executive Director",
        photo: "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
    {
        name: "Fariya Maryam",
        position: "Executive Director",
        photo: "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
];

const reviews = [
    {
        title: "“Ayka has been the best step for me so far.”",
        description:
            "Up on his horse, up on his horse not gonna wake up here anymore listen one time, its not the truth its just a story i tell to you easy to say, easy to do but its not easy, well, maybe for you hope that you find it, hope that its good hope on his horse, up on his horse not gonna wake up here anymore listen one time, its not the truth its just a",
        authorName: "Fariya Maryam",
        authorImage:
            "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
    {
        title: "“Ayka has been the best step for me so far.”",
        description:
            "Up on his horse, up on his horse not gonna wake up here anymore listen one time, its not the truth its just a story i tell to you easy to say, easy to do but its not easy, well, maybe for you hope that you find it, hope that its good hope on his horse, up on his horse not gonna wake up here anymore listen one time, its not the truth its just a",
        authorName: "Fariya Maryam",
        authorImage:
            "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
    {
        title: "“Ayka has been the best step for me so far.”",
        description:
            "Up on his horse, up on his horse not gonna wake up here anymore listen one time, its not the truth its just a story i tell to you easy to say, easy to do but its not easy, well, maybe for you hope that you find it, hope that its good hope on his horse, up on his horse not gonna wake up here anymore listen one time, its not the truth its just a",
        authorName: "Fariya Maryam",
        authorImage:
            "https://cdn.discordapp.com/attachments/706206816425476128/951042620690407444/unknown.png",
    },
];

const About = () => {
    return (
        <>
            <Head>
                <title>About | Ayka</title>
            </Head>
            <Nav />
            <div className={styles.mainContainer}>
                <div className={styles.topBanner}>
                    <div className={styles.topLeft}></div>
                    <div className={styles.topRight}>
                        <div className={styles.topInfo}>
                            <h1>Who we are</h1>
                            <h5>
                                Up on his horse, up on his horse not gonna wake up here anymore
                                listen one time, its not the truth its just a story i tell to you
                                easy to say, easy to do but its not easy, well, maybe for you hope
                                that you find it, hope that its good hope on his horse, up on his
                                horse not gonna wake up here anymore listen one time, its not the
                                truth its just a. Up on his horse, up on his horse not gonna wake up
                                here anymore listenUp on his horse, up on his horse not gonna Up on
                                his horse, up on his horse not gonna wake up here anymore listen one
                                time, its not the truth its just
                            </h5>
                        </div>
                    </div>
                </div>
                <div className={styles.visionDiv}>
                    <div className={styles.visionLeft}>
                        <div className={styles.visionInfo}>
                            <h1>Our vision</h1>
                            <h5>
                                Up on his horse, up on his horse not gonna wake up here anymore
                                listen one time, its not the truth its just a story i tell to you
                                easy to say, easy to do but its not easy, well, maybe for you hope
                                that you find it, hope that its good hope on his horse, up on his
                                horse not gonna wake up here anymore listen one time, its not the
                                truth its just a. Up on his horse, up on his horse not gonna wake up
                                here anymore listenUp on his horse, up on his horse not gonna Up on
                                his horse, up on his horse not gonna wake up here anymore listen one
                                time, its not the truth its just
                            </h5>
                        </div>
                    </div>
                    <div className={styles.visionRight}></div>
                </div>
                <div className={styles.teamDiv}>
                    <h1>Our Team</h1>
                    <div className={styles.teamMembers}>
                        {teamData.map((member) => (
                            <div className={styles.teamMember} key={member.name}>
                                <div className={styles.memberImageContainer}>
                                    <Image src={member.photo} alt={member.name} layout="fill" />
                                </div>
                                <h3>{member.name}</h3>
                                <h5>{member.position}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.banner}>
                    <div className={styles.bannerText}>
                        <h1>We just don&apos;t do art, we believe in it</h1>
                        <h3>
                            Spreading joy with the help of our passion has always been the driving
                            force for us. We want to share this experience with every child we
                            teach, every wall we paint
                        </h3>
                    </div>
                </div>
                <div className={styles.volunteer}>
                    <h1>Our Volunteers</h1>
                    <Swiper
                        navigation={true}
                        slidesPerView={1}
                        loop={true}
                        modules={[Navigation]}
                        className={styles.volunteerSwiper}
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide className={styles.volunteerSlide} key={idx}>
                                <h3>{review.title}</h3>
                                <h5>{review.description}</h5>
                                <div className={styles.volunteerInfo}>
                                    <div className={styles.memberImageContainer}>
                                        <Image
                                            src={review.authorImage}
                                            alt={review.authorName0}
                                            layout="fill"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;

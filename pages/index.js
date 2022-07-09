import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Container, Col, Row, Button } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import CustomNavbar from "../components/CustomNavbar";
import { useEffect, useState } from "react";
import CustomFooter from "../components/CustomFooter";

const topCarouselData = Array(3).fill({ src: "test1.jpg", alt: "Test image" });
const featuresData = Array(4).fill({
  iconName: "fa-palette",
  title: "Artification",
  text: "We paint on walls in run-down areas with cultural art or paintings pertaining to social or environmental issues.",
});
const imageData = [
  { size: 6, src: "test1.jpg", alt: "Test image0" },
  { size: 3, src: "test2.jpg", alt: "Test image1" },
  { size: 3, src: "test1.jpg", alt: "Test image2" },
  { size: 3, src: "test2.jpg", alt: "Test image3" },
  { size: 3, src: "test1.jpg", alt: "Test image4" },
  { size: 6, src: "test2.jpg", alt: "Test image6" },
];
const statsData = [
  { name: "Workshops", amt: 22 },
  { name: "Workshops", amt: 22 },
  { name: "Workshops", amt: 22 },
  { name: "Workshops", amt: 22 },
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
    // console.log(e.target.getAttribute("data-id"));
  };

  useEffect(() => {
    console.log(activeImage);
  }, [activeImage]);

  return (
    <>
      <CustomNavbar />
      <Container fluid>
        <Row className="">
          <Col
            xs={12}
            xl={6}
            className="flex-center align-items-xl-start section gap-2 content-pad paint-bg section text-center text-xl-start"
          >
            <h1 className="gentium display-5">
              <i>Art</i> for the people, of the people, by the people
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              numquam dolore maiores sed dicta eligendi atque, incidunt
              excepturi, sequi quis corrupti deleniti quae minima exercitationem
              quisquam culpa labore et quas voluptatibus provident distinctio
              repudiandae qui at. Harum voluptatibus veritatis qui magni alias,
              quos possimus
            </p>
            <div className="d-flex gap-4">
              <Button variant="primary" size="lg" className="rounded-0">
                Explore
              </Button>
              <Button variant="outline-primary" size="lg" className="rounded-0">
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
          <Col className="flex-center px-0">
            <h2 className="gentium col-xl-8 text-center display-6 mb-5">
              Ayka works towards holistic education of underprivileged children
              by&nbsp;
              <i>skill-building</i> and <i>creative training</i>.
            </h2>
            <Row
              xs={1}
              sm={2}
              xl={4}
              className="d-flex justify-content-between w-100 gy-5 content-pad text-center text-sm-start"
            >
              {featuresData.map((dat, idx) => (
                <Col
                  key={idx}
                  className="d-flex flex-column align-items-center align-items-sm-start"
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
        <Row className="bg-secondary flex-center section">
          <Row className="d-flex justify-content-center mb-5">
            <Col className="col-xl-6 text-center">
              <h2 className="gentium text-center display-6">
                Skill-building <i>workshops</i> for students
              </h2>
              <p className="">
                We conduct skill-building workshops with students to aid in
                creativity and training in addition to education across many art
                mediums such as cartooning, Lantern-Making, Wall Hangings, Warli
                Art
              </p>
              <Button variant="primary" size="lg" className="rounded-0">
                Learn More
              </Button>
            </Col>
          </Row>
          <Row className="gx-0 w-100">
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
              {topCarouselData.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="d-block vh-40 w-100"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Row>
        <Row className="section flex-center paint-bg">
          <Col className="col-xl-6 text-center">
            <h2 className="section-heading text-centerdiv">
              We <i>paint walls</i> around rural areas for beautification,
              awareness and on requests.
            </h2>
            <Button variant="primary" size="lg" className="rounded-0">
              Learn More
            </Button>
          </Col>
        </Row>
        <Row className="p-0 paintingGallery" onClick={onImageContainerClick}>
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
              <img
                src={img.src}
                alt={img.alt}
                className="w-100 h-100 fit-cover"
              />
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
            <Col className="flex-center p-0" key={idx}>
              <p className="green display-1 gentium">{stat.amt}</p>
              <p className="lead">{stat.name}</p>
            </Col>
          ))}
        </Row>
        <Row className="section flex-center row-cols-1">
          <Col className="flex-center col-xl-6 text-center mb-6">
            <h2 className="gentium display-6 mb-4">
              Our partners and Collaborators
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              numquam dolore maiores sed dicta eligendi atque, incidunt
              excepturi, sequi quis corrupti deleniti quae minima exercitationem
              quisquam culpa labore et quas
            </p>
          </Col>
          <Col className="flex-center flex-row gap-8 flex-wrap">
            {sponsorsData.map((sponsor, idx) => (
              <img
                key={idx}
                src={sponsor}
                style={{ width: "min(90vw,320px)" }}
                alt={sponsor}
              />
            ))}
          </Col>
        </Row>
      </Container>
      <CustomFooter />
    </>
  );
};

export default Home;

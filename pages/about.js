import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const About = () => {
  return (
    <>
      <CustomNavbar />
      <Container fluid className="flex-grow-1">
        <Row className="d-flex flex-column-reverse flex-xl-row align-items-center">
          <Col xs={12} xl={6} className="p-0">
            <img
              src="/test1.jpg"
              alt="tests image"
              className="d-block w-100 homeTopSwiperImage"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            className="justify-content-center content-pad text-custom section"
          >
            <h2 className="section-heading">Who we are</h2>
            <p>
              Up on his horse, up on his horse not gonna wake up here anymore
              listen one time, its not the truth its just a story i tell to you
              easy to say, easy to do but its not easy, well, maybe for you hope
              that you find it, hope that its good hope on his horse, up on his
              horse not gonna wake up here anymore listen one time, its not the
              truth its just a. Up on his horse, up on his horse not gonna wake
              up here anymore listenUp on his horse, up on his horse not gonna
              Up on his horse, up on his horse not gonna wake up here anymore
              listen one time, its not the truth its just
            </p>
          </Col>
        </Row>
        <Row className="bg-primary text-white align-items-center text-xl-start text-center">
          <Col xs={12} xl={6} className="section content-pad ">
            <h2 className="section-heading">Our vision</h2>
            <p>
              Up on his horse, up on his horse not gonna wake up here anymore
              listen one time, its not the truth its just a story i tell to you
              easy to say, easy to do but its not easy, well, maybe for you hope
              that you find it, hope that its good hope on his horse, up horse
              not gonna wake up here anymore listen one time, its not the truth
              its just a. Up on his horse, up on his horse not gonna wake up
              here anymore listen Up on his horse
            </p>
          </Col>
          <Col xs={12} xl={6} className="p-0">
            <img
              src="/test2.jpg"
              alt="tests image"
              className="d-block w-100 homeTopSwiperImage"
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
        <Row className="section text-center">
          <h2 className="section-heading">Our Team</h2>
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 px-6">
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
          </div>
        </Row>
        <Row className="section bg-secondary text-center">
          <h2 className="section-heading">
            We just don&apos;t do art, we believe in it.
          </h2>
          <p>
            Spreading joy with the help of our passion has always been the
            driving force for us. We want to share this experience with every
            child we teach, every wall we paint
          </p>
        </Row>
        <Row className="section text-center content-pad">
          <h2 className="section-heading">Our Volunteers</h2>
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="text-white"
          >
            <SwiperSlide className="flex-center">
              <div
                className="bg-primary position-relative py-5 mx-5 px-7"
                style={{ maxWidth: "800px" }}
              >
                <h2 className="gentium section-title fst-italic mb-4">
                  “Ayka has been the best step for me so far.”
                </h2>
                <p>
                  Up on his horse, up on his horse not gonna wake up here
                  anymore listen one time, its not the truth its just a story i
                  tell to you easy to say, easy to do but its not easy, well,
                  maybe for you hope that you find it, hope that its good hope
                  on his horse, up on his horse not gonna wake up here anymore
                  listen one time, its not the truth its just a
                </p>
                <div
                  className="position-absolute p-4 start-50 top-100 translate-middle"
                  style={{ borderRadius: "999px" }}
                >
                  <img
                    src="aaghaz-e-taleem.jpg"
                    alt="person"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
              <h4 className="mt-6 text-black">Fariya Maryam</h4>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="bg-primary py-5 mx-5">b</div>
            </SwiperSlide> */}
          </Swiper>
        </Row>
      </Container>
      <CustomFooter />
    </>
  );
};

const PersonCard = () => {
  return (
    <div>
      <img
        src="/test1.jpg"
        alt="person"
        style={{
          height: "260px",
          width: "260px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
        className="mb-3"
      />
      <h4>Ujjwal Dimri</h4>
      <p className="small">Executive Director</p>
    </div>
  );
};

const VolunteerCard = () => {
  return (
    <div>
      <a></a>
    </div>
  );
};

export default About;

import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container, Button, Row, Col } from "react-bootstrap";

const Workshops = () => {
  return (
    <>
      <CustomNavbar />
      <Container fluid>
        <Row className="">
          <Col
            xs={12}
            xl={6}
            className="flex-center align-items-xl-start section gap-2 content-pad paint-bg pt-8 pt-xl-0"
          >
            <h1 className="gentium display-5">Workshops</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              numquam dolore maiores sed dicta eligendi atque, incidunt
              excepturi, sequi quis corrupti deleniti quae minima exercitationem
              quisquam culpa labore et quas voluptatibus provident distinctio
              repudiandae qui at. Harum voluptatibus veritatis qui magni alias,
              quos possimus
            </p>
            <div className="d-flex gap-4">
              <Button variant="outline-primary" size="lg" className="rounded-0">
                Volunteer
              </Button>
            </div>
          </Col>
          <Col xs={12} xl={6} className="p-0 me-n5">
            <img
              src="/test1.jpg"
              alt="tests image"
              className="d-block w-100 homeTopSwiperImage"
              style={{ objectFit: "cover" }}
            />
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
              <Col
                className="d-flex flex-column align-items-center align-items-sm-start bg-white text-black p-5"
                style={{ borderRadius: 15 }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i
                    className={`fa-solid text-primary fa-crosshairs mb-2 `}
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <h4 className="text-primary ps-2 ">Aim</h4>
                </div>
                <p>
                  Up on his horse, up on his horse not gonna wake up here
                  anymore listen one time, its not the truth its just a story i
                  tell to you easy to say, easy to do but its not easy, well,
                  maybe for you hope tha
                </p>
              </Col>
              <Col
                className="d-flex flex-column align-items-center align-items-sm-start bg-white text-black p-5"
                style={{ borderRadius: 15 }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i
                    className={`fa-solid text-primary fa-crown mb-2 `}
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <h4 className="text-primary ps-2 ">Inspire</h4>
                </div>
                <p>
                  Up on his horse, up on his horse not gonna wake up here
                  anymore listen one time, its not the truth its just a story i
                  tell to you easy to say, easy to do but its not easy, well,
                  maybe for you hope tha
                </p>
              </Col>
              <Col
                className="d-flex flex-column align-items-center align-items-sm-start bg-white text-black p-5"
                style={{ borderRadius: 15 }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i
                    className={`fa-solid text-primary fa-user-group mb-2 `}
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <h4 className="text-primary ps-2 ">Expand </h4>
                </div>
                <p>
                  Up on his horse, up on his horse not gonna wake up here
                  anymore listen one time, its not the truth its just a story i
                  tell to you easy to say, easy to do but its not easy, well,
                  maybe for you hope tha
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <CustomFooter />
    </>
  );
};

export default Workshops;

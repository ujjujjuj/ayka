import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <CustomNavbar />
      <Container fluid className="flex-grow-1 flex-center">
        <Row className="section text-center">
          <h1 className="display-1">404</h1>
          <h2>Page not found</h2>
        </Row>
      </Container>
      <CustomFooter />
    </>
  );
};
export default NotFound;

import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";
import { Container, Row } from "react-bootstrap";
import Head from "next/head";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Ayka | Blogs</title>
            </Head>
            <CustomNavbar />
            <Container fluid className="flex-grow-1 flex-center">
                <Row className="section text-center">
                    <h1 className="display-1"></h1>
                    <h2>Coming soon</h2>
                </Row>
            </Container>
            <CustomFooter />
        </>
    );
};
export default NotFound;

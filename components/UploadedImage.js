import { Container, Col, Row, Button, Form, FloatingLabel, Card } from "react-bootstrap";
import Router from "next/router";
import { toast, ToastContainer } from "react-toastify";

const UploadedImage = ({ image }) => {
    const copyLink = () => {
        navigator.clipboard.writeText(image.src).then(() => toast.success("Copied image name to the clipboard"));
    };

    return (
        <Col xs={12} md={6} xl={4} className="mb-4">
            {/* <Card className="flex-basis-1"> */}
            <Card.Body>
                <Card.Img variant="top" src={image.src} />
                <Card.Title>{image.name}</Card.Title>
                <small className={`mb-2 d-block text-muted`}>{image.name}</small>
                <Card.Text>{image.name}</Card.Text>
                <Button variant="primary" className="me-3" onClick={copyLink}>
                    Copy Link
                </Button>
                <Button variant="danger">Delete</Button>
            </Card.Body>
            {/* </Card> */}
            <ToastContainer />
        </Col>
    );
};

export default UploadedImage;

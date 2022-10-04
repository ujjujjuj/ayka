import AdminNav from "../../components/AdminNav";
import { Container, Alert, Row, Button, Form, FloatingLabel, Col, Toast } from "react-bootstrap";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import UploadedImage from "../../components/UploadedImage";

const images = Array(3).fill({ src: "/media/wallpaintings/wall14.png", "": "wall_paint.png" });

const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const UploadImage = () => {
    const fileRef = useRef();

    const formSubmit = async (e) => {
        e.preventDefault();

        fetch("/api/image/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                file: (await toBase64(fileRef.current.files[0])).slice(22),
            }),
        })
            .then((res) => res.json())
            .then((dat) => {
                console.log(dat);
            });
    };

    return (
        <>
            <AdminNav />
            <Container xl="true" className="py-4">
                <Col xs={12} lg={6} className="mx-auto">
                    <h1 className="mb-4">Upload Image</h1>
                    <Form onSubmit={formSubmit}>
                        <Form.Control
                            ref={fileRef}
                            type="file"
                            placeholder="New Password"
                            name="newpassword"
                            accept=".png,.jpeg,.jpg,.webp,.gif,.svg"
                            required
                        />
                        <Button variant="primary" type="submit" className="mt-3">
                            Upload
                        </Button>
                    </Form>
                </Col>
                {/* <Row className="mt-5 row">
                    {images.map((img, idx) => (
                        <UploadedImage key={idx} image={img} />
                    ))}
                </Row> */}
            </Container>
            <ToastContainer />
        </>
    );
};

export default UploadImage;

import AdminNav from "../../components/AdminNav";
import { Container, Alert, Button, Form, FloatingLabel, Col, Toast } from "react-bootstrap";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ChangePassword = () => {
    const [error, setError] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        setError("");
        const formData = Object.fromEntries(new FormData(e.target).entries());
        if (formData.newpassword !== formData.newpasswordconf) {
            return setError("New passwords do not match.");
        }

        fetch("/api/auth/changePassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((dat) => {
                if (dat.error) {
                    setError(dat.message);
                } else {
                    toast.success("Changed password successfully!");
                }
            });
    };

    return (
        <>
            <AdminNav />
            <Container xl="true" className="py-4">
                <Col xs={12} lg={6} className="mx-auto">
                    <h1 className="mb-4">Change Password</h1>
                    <Form onSubmit={formSubmit}>
                        <FloatingLabel label="Old Password" className="mb-3">
                            <Form.Control type="password" placeholder="Old Password" name="oldpassword" required />
                        </FloatingLabel>
                        <FloatingLabel label="New Password" className="mb-3">
                            <Form.Control type="password" placeholder="New Password" name="newpassword" required />
                        </FloatingLabel>
                        <FloatingLabel label="Re-Type New Password">
                            <Form.Control
                                type="password"
                                placeholder="Re-type New Password"
                                name="newpasswordconf"
                                required
                            />
                        </FloatingLabel>
                        <Button variant="primary" type="submit" className="mt-3">
                            Change
                        </Button>
                        {error.length > 0 && <Alert variant="danger mt-4">{error}</Alert>}
                    </Form>
                </Col>
            </Container>
            <ToastContainer />
        </>
    );
};

export default ChangePassword;

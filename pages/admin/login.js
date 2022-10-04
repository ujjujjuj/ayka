import { useState } from "react";
import { Container, Col, Row, Button, Form, FloatingLabel, Alert } from "react-bootstrap";
import Router from "next/router";
import { addAuthInfo } from "../../lib/addAuthInfo";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target).entries());
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((dat) => {
                if (dat.error) {
                    toast.error(dat.message);
                } else {
                    Router.push("/admin");
                }
            });
    };
    return (
        <>
            <Container sm="true" className="mt-5">
                <Col xs={12} lg={6} className="mx-auto">
                    <Form onSubmit={formSubmit}>
                        <FloatingLabel label="Username" className="mb-3">
                            <Form.Control type="text" placeholder="aykauser" name="username" required />
                        </FloatingLabel>
                        <FloatingLabel label="Password">
                            <Form.Control type="password" placeholder="Password" name="password" required />
                        </FloatingLabel>
                        <Button variant="primary" type="submit" className="mt-3">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Container>
            <ToastContainer />
        </>
    );
};

export default Login;

export const getServerSideProps = async ({ req, res }) => {
    await addAuthInfo(req, res);

    if (req.user !== null) {
        return {
            redirect: {
                destination: "/admin/",
            },
        };
    } else {
        return {
            props: {},
        };
    }
};

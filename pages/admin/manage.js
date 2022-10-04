import { addAuthInfo } from "../../lib/addAuthInfo";
import { Container, Col, Row, Button, Form, Modal, Table } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";
import AdminNav from "../../components/AdminNav";
import { useEffect, useState, useRef } from "react";
import getClient from "../../lib/db";

const ManageUsers = ({ users }) => {
    const [members, setMembers] = useState(users);
    const [deletedDocs, setDeletedDocs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const formRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const uploadData = () => {
        const formData = Array.from(new FormData(formRef.current).entries());
        const updates = {};
        for (let rec of formData) {
            const [userId, field] = rec[0].split("-");
            updates[userId] = { ...updates[userId], [field]: rec[1] };
        }
        fetch("/api/auth/setUsers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                updates,
                deleted: deletedDocs.filter((docid) => docid.slice(0, 3) !== "new"),
            }),
        });
    };

    const formClick = (e) => {
        if (e.target.nodeName == "I") {
            setDeletedDocs((deletedDocs) => [...deletedDocs, e.target.dataset.id]);
            e.target.parentNode.parentNode.remove();
        }
    };

    return (
        <>
            <AdminNav />
            <Container xl="true" className="py-4">
                <Col className="d-flex mb-4">
                    <h2 className="d-inline-block mb-0 me-3">Manage Accounts</h2>
                </Col>
                <Form onSubmit={formSubmit} onClick={formClick} ref={formRef}>
                    <Table striped bordered hover className="manage-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((user, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            name={`${user._id}-name`}
                                            defaultValue={user.name}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            placeholder="Position"
                                            name={`${user._id}-position`}
                                            defaultValue={user.position}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            name={`${user._id}-username`}
                                            defaultValue={user.username}
                                        />
                                    </td>
                                    <td className="text-center align-middle">
                                        <i
                                            className="fa-solid fa-trash text-danger"
                                            style={{ cursor: "pointer" }}
                                            data-id={user._id}
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>
                                    <Button
                                        size="sm"
                                        className="rounded-0"
                                        onClick={() => {
                                            const newId = `new${Math.random().toString().slice(2, 10)}`;
                                            setMembers((_members) => [
                                                ..._members,
                                                {
                                                    _id: newId,
                                                    name: "New Name",
                                                    position: "New Position",
                                                    username: "New Username",
                                                },
                                            ]);
                                        }}
                                    >
                                        Add new
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="primary" type="submit" className="mt-3">
                        Save Changes
                    </Button>
                </Form>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to make the respective changes? These cannot be reverted.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={uploadData}>
                        Continue
                    </Button>
                    <Button variant="danger" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ManageUsers;

export const getServerSideProps = async ({ req, res }) => {
    await addAuthInfo(req, res);

    if (!req.user) {
        return {
            redirect: {
                destination: "/admin/login",
            },
        };
    }

    const client = await getClient();
    const users = await client.db().collection("users").find().project({ password: 0 });
    const userArr = (await users.toArray()).map((user) => ({ ...user, _id: user._id.toString() }));

    return {
        props: { users: userArr },
    };
};

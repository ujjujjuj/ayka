import { Container, Col, Row, Button, Form, Modal, Table, FloatingLabel } from "react-bootstrap";
import AdminNav from "../../components/AdminNav";
import Router, { useRouter } from "next/router";
import getClient from "../../lib/db";
import { ObjectId } from "mongodb";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Blog from "../../components/Blog";

const EditBlog = ({ blog }) => {
    const [blogTitle, setBlogTitle] = useState(blog.title);
    const [blogContent, setBlogContent] = useState(blog.content);
    const router = useRouter();

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target).entries());
        fetch("/api/blog/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData, _id: router.query.id }),
        })
            .then((res) => res.json())
            .then((dat) => {
                if (dat.error) {
                    toast.error(dat.message);
                } else {
                    toast.success("Blog updated successfully!");
                }
            });
    };

    return (
        <>
            <AdminNav />
            <Container xl="true" className="py-4">
                <Row>
                    <Col className="d-flex mb-4">
                        <Button size="sm" className="rounded-0" onClick={() => Router.back()}>
                            <i className="fa-solid fa-arrow-left mx-2"></i>
                        </Button>
                        <h2 className="ms-3 mb-0 d-inline">Add Blog</h2>
                    </Col>
                </Row>
                <Form onSubmit={formSubmit} autoComplete="off">
                    <FloatingLabel label="Blog Title" className="mb-4">
                        <Form.Control
                            type="text"
                            placeholder="Blog title"
                            name="title"
                            required
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                        />
                    </FloatingLabel>
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        className="mb-4"
                        as="textarea"
                        rows={16}
                        name="content"
                        required
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                    />
                    <Form.Check type="switch" label="Publish" name="publish" defaultChecked={blog.published} />
                    <Col>
                        <Button variant="primary" type="submit" className="mt-3 d-inline rounded-0 me-3">
                            Save Changes
                        </Button>
                    </Col>
                </Form>
                <h2 className="mt-5">Preview</h2>
                <hr />
                <Row>
                    <Blog blog={{...blog,title:blogTitle,content:blogContent,}}/>
                </Row>
            </Container>
            <ToastContainer />
        </>
    );
};

export default EditBlog;

export async function getServerSideProps({ req, res, query }) {
    const client = await getClient();
    const blog = await client
        .db()
        .collection("blogs")
        .findOne({ _id: new ObjectId(query.id) });
    if (blog === null) {
        return {
            redirect: {
                destination: "/admin/",
            },
        };
    }

    blog._id = blog._id.toString();

    return {
        props: { blog },
    };
}

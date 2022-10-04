import { addAuthInfo } from "../../lib/addAuthInfo";
import { Container, Col, Row, Button, Form, FloatingLabel, CardGroup } from "react-bootstrap";
import Router from "next/router";
import AdminNav from "../../components/AdminNav";
import { useEffect, useState } from "react";
import getClient from "../../lib/db";
import BlogCard from "../../components/BlogCard";

const AdminHome = ({ blogs }) => {
    const createBlog = () => {
        fetch("/api/blog/new", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((dat) => {
                if (dat.err) throw new Error(dat.message);
                Router.push(`/admin/editblog?id=${dat.data._id}`);
            });
    };

    return (
        <>
            <AdminNav />
            <Container xl="true" className="py-4">
                <Col className="d-flex">
                    <h2 className="d-inline-block mb-0 me-3">Blogs</h2>
                    <Button size="sm" className="rounded-0" onClick={createBlog}>
                        Create new Blog
                    </Button>
                </Col>
                <Row className="mt-5 row">
                    {blogs.map((blog, idx) => (
                        <BlogCard key={idx} blog={blog} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default AdminHome;

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
    const blogs = await client.db().collection("blogs").find({});
    let blogsArray = (await blogs.toArray()).map((blog) => ({ ...blog, _id: blog._id.toString() }));
    console.log(blogsArray);
    return {
        props: { blogs: blogsArray },
    };
};

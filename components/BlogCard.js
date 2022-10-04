import { Container, Col, Row, Button, Form, FloatingLabel, Card } from "react-bootstrap";
import Router from "next/router";

const MAX_TEXTLEN = 150;
const ellipsify = (text) => (text.length <= MAX_TEXTLEN ? text : text.slice(0, MAX_TEXTLEN) + "...");

const BlogCard = ({ blog }) => {
    console.log(blog);
    return (
        <Col xs={12} md={6} xl={4} className="mb-4">
            <Card className="flex-basis-1">
                <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <small className={`mb-2 d-block ${blog.published ? "text-primary" : "text-muted"}`}>
                        {blog.published ? "Published" : "Not Published"}
                    </small>
                    <Card.Text>{ellipsify(blog.content)}</Card.Text>
                    <Button variant="primary" onClick={() => Router.push(`/admin/editblog?id=${blog._id}`)}>
                        Edit
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;

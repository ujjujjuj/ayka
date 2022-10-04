import ReactMarkdown from "react-markdown";

const Blog = ({ blog }) => {
    return (
        <ReactMarkdown>{`# ${blog.title}\n${new Date(blog.createdAt).toLocaleString()}  \n\n${
            blog.content
        }`}</ReactMarkdown>
    );
};

export default Blog;

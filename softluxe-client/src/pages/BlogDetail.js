import React, { useEffect, useState } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogDetail } from '../services/api';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogDetail(slug)
            .then((res) => {
                setBlog(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                // Could redirect to 404 here
            });
    }, [slug]);

    if (loading) return <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>;

    if (!blog) {
        return (
            <Container className="py-5 text-center">
                <h2>Blog Post Not Found</h2>
                <Button as={Link} to="/blog" variant="primary" className="mt-3">Back to Blog</Button>
            </Container>
        );
    }

    return (
        <Container className="py-5" style={{ maxWidth: '800px' }}>
            <Button as={Link} to="/blog" variant="link" className="text-decoration-none mb-4">&larr; Back to Blog</Button>

            {blog.featuredImage && (
                <img src={blog.featuredImage} alt={blog.title} className="img-fluid rounded mb-4 w-100" />
            )}

            <h1 className="fw-bold mb-3">{blog.title}</h1>
            <div className="text-muted mb-4 d-flex justify-content-between align-items-center">
                <span>By {blog.author}</span>
                <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
            </div>

            <div className="blog-content lh-lg" dangerouslySetInnerHTML={{ __html: blog.body.replace(/\n/g, '<br />') }}>
                {/* Note: In a real app, use a sanitizer for dangerous HTML */}
            </div>
        </Container>
    );
};

export default BlogDetail;

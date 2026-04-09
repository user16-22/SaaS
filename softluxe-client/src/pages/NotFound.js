import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <Container className="text-center py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
            <FaExclamationTriangle className="text-warning display-1 mb-4" />
            <h1 className="display-4 fw-bold">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead text-muted mb-5">The page you are looking for does not exist or has been moved.</p>
            <Button as={Link} to="/" variant="primary" size="lg">Go Back Home</Button>
        </Container>
    );
};

export default NotFound;

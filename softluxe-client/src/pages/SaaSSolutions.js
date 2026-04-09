import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SaaSSolutions = () => {
    return (
        <div className="saas-page">
            <section className="py-5 text-center position-relative overflow-hidden" style={{ backgroundColor: '#fff', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, opacity: 0.5, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-0">SaaS Product Solutions</h1>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <h2 className="display-4 fw-bold mb-4">Scaling Your <span className="text-primary">Software Product</span></h2>
                            <p className="text-muted mb-5 lead">
                                We design and build enterprise-grade SaaS platforms that scale from day one, focusing on security, performance, and user adoption.
                            </p>
                            <Button className="btn-primary rounded-pill px-5 py-3 shadow-lg" style={{ backgroundColor: '#8B5CF6', border: 'none' }}>
                                Learn More
                            </Button>
                        </Col>
                        <Col lg={6}>
                            <img src="/images/service-support.png" className="img-fluid rounded-xl shadow-2xl" alt="SaaS" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default SaaSSolutions;

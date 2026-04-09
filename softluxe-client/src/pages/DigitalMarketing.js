import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DigitalMarketing = () => {
    return (
        <div className="digital-marketing-page">
            <section className="py-5 text-center position-relative overflow-hidden" style={{ backgroundColor: '#fff', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, opacity: 0.5, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-0">Digital Marketing</h1>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6} className="order-lg-2">
                            <h2 className="display-4 fw-bold mb-4">Driving <span className="text-primary">Growth & Visibility</span></h2>
                            <p className="text-muted mb-5 lead">
                                We help your software product get in front of the right eyes, with results-driven SEO, content marketing, and performance advertising.
                            </p>
                            <Button className="btn-primary rounded-pill px-5 py-3 shadow-lg" style={{ backgroundColor: '#8B5CF6', border: 'none' }}>
                                Get Started
                            </Button>
                        </Col>
                        <Col lg={6} className="order-lg-1">
                            <img src="/images/service-integration.png" className="img-fluid rounded-xl shadow-2xl" alt="Digital Marketing" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default DigitalMarketing;

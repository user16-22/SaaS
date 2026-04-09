import React from 'react';
import { Container, Row, Col, Card, Accordion, Button, Form } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';

const Services = () => {
    return (
        <div className="services-page">
            {/* Header Section */}
            <section className="text-center position-relative overflow-hidden" 
                style={{ backgroundColor: '#fff', paddingTop: '180px', paddingBottom: '80px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute w-100 h-100" 
                    style={{ top: 0, left: 0, zIndex: 0, opacity: 0.5, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-0" style={{ letterSpacing: '-1px' }}>
                        Our <span className="text-primary">Services</span>
                    </h1>
                </Container>
            </section>

            {/* Innovation Section */}
            <section className="py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>
                            Innovation That <br />
                            <span className="text-primary">Delivers Real Results</span>
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.95rem', opacity: 0.7 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                        </p>
                    </div>

                    {/* Innovation Grid */}
                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <Card className="border-0 bg-light h-100 rounded-xl shadow-sm overflow-hidden position-relative" style={{ minHeight: '320px' }}>
                                <div className="p-4 p-lg-5 position-relative z-1 d-flex flex-column h-100 justify-content-center">
                                    <h3 className="fw-bold mb-3" style={{ fontSize: '1.85rem', lineHeight: '1.2', maxWidth: '180px' }}>Seamless Integration</h3>
                                    <p className="text-muted mb-0" style={{ maxWidth: '240px', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                    </p>
                                </div>
                                <div className="position-absolute" style={{ top: '50%', right: '-10%', width: '60%', transform: 'translateY(-50%)', zIndex: 0 }}>
                                    <img src="/images/service-integration.png" alt="Integration UI" className="img-fluid rounded-xl shadow-lg border" style={{ border: '1px solid rgba(0,0,0,0.05)' }} />
                                </div>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="border-0 bg-light h-100 rounded-xl shadow-sm overflow-hidden position-relative" style={{ minHeight: '320px' }}>
                                <div className="p-4 p-lg-5 position-relative z-1 d-flex flex-column h-100 justify-content-center">
                                    <h3 className="fw-bold mb-3" style={{ fontSize: '1.85rem', lineHeight: '1.2', maxWidth: '180px' }}>Reliable Performance</h3>
                                    <p className="text-muted mb-0" style={{ maxWidth: '240px', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                    </p>
                                </div>
                                <div className="position-absolute" style={{ top: '50%', right: '-10%', width: '60%', transform: 'translateY(-50%)', zIndex: 0 }}>
                                    <img src="/images/service-performance.png" alt="Performance UI" className="img-fluid rounded-xl shadow-lg border" style={{ border: '1px solid rgba(0,0,0,0.05)' }} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Card className="border-0 p-0 rounded-xl overflow-hidden position-relative shadow-lg" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)', minHeight: '320px' }}>
                                <Row className="align-items-center g-0 h-100">
                                    <Col md={5} className="p-5 text-white position-relative z-1">
                                        <h3 className="display-6 fw-bold mb-3" style={{ fontSize: '2.25rem' }}>Dedicated <br />Support Team</h3>
                                        <p className="mb-0 opacity-75" style={{ maxWidth: '350px', fontSize: '0.95rem' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                            Morbi vel purus est.
                                        </p>
                                    </Col>
                                    <Col md={7} className="position-relative h-100" style={{ minHeight: '320px' }}>
                                        <div className="position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-end overflow-hidden">
                                            <img src="/images/service-support.png" alt="Support Portal" className="img-fluid" style={{ width: '90%', height: 'auto', transform: 'translateX(50px) translateY(10px)' }} />
                                        </div>
                                        <div className="position-absolute bottom-0 end-0 p-4">
                                            <FiArrowUpRight size={32} className="text-white opacity-50" />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Testimonials Section */}
            <section className="py-5 overflow-hidden">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold" style={{ letterSpacing: '-2px' }}>Hear from Our<br /><span className="text-primary">Happy Customers</span></h2>
                    </div>

                    <Row className="g-0 align-items-end mt-5">
                        {/* Left Group */}
                        <Col lg={6} className="pe-lg-4 mb-5 mb-lg-0">
                            <div className="d-flex align-items-end position-relative">
                                {/* Portrait */}
                                <div className="flex-shrink-0" style={{ width: '45%', zIndex: 1 }}>
                                    <img src="/images/testimonial-david.png" alt="David Wilson" className="img-fluid" style={{ marginBottom: '-60px' }} />
                                </div>
                                {/* bubbles container */}
                                <div className="flex-grow-1 position-relative" style={{ marginLeft: '-80px', zIndex: 2 }}>
                                    {/* White Bubble */}
                                    <div className="bg-white p-4 p-lg-5 rounded-xl shadow-sm border mb-3" style={{ borderRadius: '40px 40px 40px 0 !important' }}>
                                        <p className="mb-2 fw-bold" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                                            "We've tried several platforms before, but this one stands out for its clean interface and seamless integration."
                                        </p>
                                        <div className="text-muted small">James Reed</div>
                                    </div>
                                    {/* Purple Bubble */}
                                    <div className="p-4 p-lg-5 rounded-xl shadow-lg text-white" style={{ background: '#8B5CF6', borderRadius: '0 40px 40px 40px !important', marginLeft: '40px' }}>
                                        <p className="mb-2 fw-bold" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                                            "This software helped our team work twice as fast. The automation feature saved us every week."
                                        </p>
                                        <div className="small opacity-75">David Wilson</div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Right Group */}
                        <Col lg={6} className="ps-lg-4">
                            <div className="ms-auto" style={{ maxWidth: '500px' }}>
                                {/* White Bubble */}
                                <div className="bg-white p-4 p-lg-5 rounded-xl shadow-sm border mb-n5 position-relative z-2 mx-auto" style={{ maxWidth: '420px', borderRadius: '40px 40px 40px 0 !important', marginRight: '40px' }}>
                                    <p className="mb-2 fw-bold" style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
                                        "The support team is incredibly responsive."
                                    </p>
                                    <div className="text-muted small">James Reed</div>
                                </div>
                                {/* Portrait */}
                                <div className="position-relative z-1 rounded-xl overflow-hidden shadow-sm">
                                    <img src="/images/testimonial-james.png" alt="James Reed" className="img-fluid w-100" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 pb-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold" style={{ letterSpacing: '-1.5px' }}>Frequently Asked<br /><span className="text-primary">Questions</span></h2>
                    </div>

                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Accordion defaultActiveKey="0" className="about-faq-accordion">
                                {[
                                    {
                                        q: 'How does the platform work?',
                                        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit ligula at vehicula ornare, sem dolor facilisis libero, nec eleifend felis sapien ac diam. Morbi elementum urna arcu, sed sodales tellus venenatis at. Aliquam blandit nisl a ultrices laoreet.'
                                    },
                                    {
                                        q: 'Do I need technical skills to use it?',
                                        a: 'No technical skills are required. Our platform is designed to be user-friendly and intuitive for everyone.'
                                    },
                                    {
                                        q: 'Can I upgrade or downgrade my plan anytime?',
                                        a: 'Yes, you can change your subscription plan at any time through your account settings.'
                                    },
                                    {
                                        q: 'Do you offer customer support?',
                                        a: 'We offer 24/7 customer support via email and live chat to help you with any issues.'
                                    }
                                ].map((item, idx) => (
                                    <Accordion.Item eventKey={String(idx)} key={idx} className="border-0 mb-3 rounded-xl overflow-hidden shadow-sm">
                                        <Accordion.Header className="fw-bold">{item.q}</Accordion.Header>
                                        <Accordion.Body className="text-muted">
                                            {item.a}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Bottom Banner */}
            <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
                {/* Visual Glows */}
                <div className="position-absolute" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', top: '10%', left: '-10%', zIndex: 0 }}></div>
                <div className="position-absolute" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', bottom: '10%', right: '-10%', zIndex: 0 }}></div>

                <Container className="position-relative z-1">
                    <Row className="align-items-center g-4">
                        <Col lg={4}>
                            <div>
                                <h2 className="display-4 fw-bold mb-3 text-primary" style={{ letterSpacing: '-2px' }}>
                                    Your Potential
                                </h2>
                                <p className="text-muted small mb-0" style={{ maxWidth: '350px', opacity: 0.8 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="text-center">
                            <img
                                src="/images/banner-3d.png"
                                alt="3D Abstract"
                                className="img-fluid"
                                style={{ maxHeight: '350px', transform: 'scale(1.2)' }}
                            />
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex flex-column gap-4 align-items-lg-end align-items-center">
                                <div className="bg-white rounded-xl shadow-lg p-4 position-relative" style={{ width: '280px', border: '1px solid rgba(139, 92, 246, 0.1)', transform: 'translateY(-20px)' }}>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h2 className="fw-bold text-primary mb-1" style={{ fontSize: '2.5rem', letterSpacing: '-1px' }}>10K+</h2>
                                            <p className="text-muted small mb-0 fw-bold">Project Done</p>
                                        </div>
                                        <div className="bg-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', color: '#8B5CF6' }}>
                                            <FiArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 w-100 justify-content-lg-end justify-content-center" style={{ maxWidth: '400px' }}>
                                    <Form.Control type="email" placeholder="Email" className="rounded-pill px-4 py-2" style={{ borderColor: 'rgba(139, 92, 246, 0.3)', background: 'rgba(255, 255, 255, 0.9)' }} />
                                    <Button className="btn-primary rounded-pill px-4" style={{ backgroundColor: '#8B5CF6', border: 'none' }}>Submit</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <style>{`
                .about-faq-accordion .accordion-button {
                    background-color: #f8f9fa;
                    color: #000;
                    font-weight: 600;
                    padding: 1.5rem;
                    border: none;
                }
                .about-faq-accordion .accordion-button:not(.collapsed) {
                    background-color: #8B5CF6;
                    color: white;
                    box-shadow: none;
                }
                .about-faq-accordion .accordion-button::after {
                    filter: grayscale(1) brightness(0);
                }
                .about-faq-accordion .accordion-button:not(.collapsed)::after {
                    filter: brightness(0) invert(1);
                }
                .rounded-xl {
                    border-radius: 20px !important;
                }
            `}</style>
        </div>
    );
};

export default Services;

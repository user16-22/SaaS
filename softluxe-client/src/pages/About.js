import React from 'react';
import { Container, Row, Col, Card, Accordion, Button, Form } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="py-5 text-center position-relative overflow-hidden" style={{ backgroundColor: '#fff', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, opacity: 0.5, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-0" style={{ letterSpacing: '-1px' }}>
                        About <span className="text-primary">Us</span>
                    </h1>
                </Container>
            </section>

            {/* Insights Section */}
            <section className="py-5 overflow-hidden">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <h2 className="display-5 fw-bold mb-4" style={{ letterSpacing: '-1.5px' }}>Insights That Drive<br /><span className="text-primary">Smarter Decisions</span></h2>
                            <p className="text-muted mb-5" style={{ maxWidth: '450px', fontSize: '1.1rem' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                            </p>

                            {/* Stats Box */}
                            <Row className="mb-5 g-0 bg-light rounded-xl overflow-hidden shadow-sm border border-white" style={{ maxWidth: '450px' }}>
                                <Col xs={6} className="p-4 border-end border-white">
                                    <h3 className="fw-bold text-primary mb-0">25K+</h3>
                                    <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Project Done</small>
                                </Col>
                                <Col xs={6} className="p-4">
                                    <h3 className="fw-bold text-primary mb-0">99.2%</h3>
                                    <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Track Performance</small>
                                </Col>
                            </Row>

                            <Button variant="primary" className="rounded-pill px-5 py-3 fw-bold shadow-lg">Get Started</Button>
                        </Col>

                        <Col lg={6} className="position-relative">
                            {/* Decorative Background Cards (Purple Gradients) */}
                            <div className="position-absolute" style={{ top: '10%', right: '15%', width: '380px', height: '480px', background: 'linear-gradient(135deg, #C4B5FD 0%, #A78BFA 100%)', borderRadius: '40px', opacity: 0.8, zIndex: 1, transform: 'rotate(5deg)' }}></div>
                            <div className="position-absolute" style={{ top: '5%', right: '5%', width: '380px', height: '480px', background: 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)', borderRadius: '40px', opacity: 0.5, zIndex: 0, transform: 'rotate(8deg)' }}></div>

                            {/* Main 3D Composition */}
                            <div className="position-relative text-center" style={{ zIndex: 5 }}>
                                <img src="/assets/images/insights/insights-3d.png" alt="3D Abstract" className="img-fluid" style={{ maxWidth: '90%' }} />

                                {/* Floating Stat Card */}
                                <div className="position-absolute bg-white rounded-xl p-3 border border-primary border-opacity-10 shadow-lg" style={{ top: '15%', left: '0', width: '200px', zIndex: 10 }}>
                                    <div className="d-flex flex-column text-start">
                                        <h4 className="text-primary fw-bold mb-0">350k+</h4>
                                        <small className="text-muted" style={{ fontSize: '0.8rem' }}>Client Projects</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>Meet Our <span className="text-primary">Expert Team</span></h2>
                    </div>

                    <Row className="g-4 justify-content-center">
                        {[
                            {
                                name: 'Ethan Miller',
                                role: 'CEO & Product Strategist',
                                img: '/images/about/team-ethan.png'
                            },
                            {
                                name: 'Noah Parker',
                                role: 'UX/UI Design Lead',
                                img: '/images/about/team-noah.png'
                            },
                            {
                                name: 'Liam Anderson',
                                role: 'Lead Software Engineer',
                                img: '/images/about/team-liam.png'
                            }
                        ].map((member, idx) => (
                            <Col md={4} key={idx} className="team-col">
                                <div className="text-center">
                                    <div className="position-relative mb-2 mx-auto" style={{ width: '100%' }}>
                                        {/* High-fidelity Portrait */}
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="img-fluid"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                            }}
                                        />
                                    </div>
                                    <h3 className="fw-bold mb-1" style={{ fontSize: '1.75rem', letterSpacing: '-0.5px' }}>{member.name}</h3>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', opacity: 0.7 }}>{member.role}</p>
                                </div>
                            </Col>
                        ))}
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
            <section className="py-5 position-relative overflow-hidden">
                {/* Background Blurry Spots */}
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                    backgroundImage: 'url(/images/testimonial-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                    zIndex: 0
                }}></div>

                <Container className="position-relative z-1">
                    <Row className="align-items-center g-4">
                        {/* Left Side - Text */}
                        <Col lg={4}>
                            <div>
                                <h2 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
                                    Let’s Unlock <br />
                                    <span className="text-primary">Your Potential</span>
                                </h2>
                                <p className="text-muted small mb-0" style={{ maxWidth: '350px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                </p>
                            </div>
                        </Col>

                        {/* Center - 3D Asset */}
                        <Col lg={4} className="text-center">
                            <img
                                src="/images/banner-3d.png"
                                alt="3D Abstract"
                                className="img-fluid"
                                style={{ maxHeight: '350px', transform: 'scale(1.1)' }}
                            />
                        </Col>

                        {/* Right Side - Status and Form */}
                        <Col lg={4}>
                            <div className="d-flex flex-column gap-4 align-items-center align-items-lg-end">
                                {/* Stat Card */}
                                <div className="bg-white rounded-xl shadow-lg p-4 position-relative" style={{ width: '280px', border: '1px solid rgba(139, 92, 246, 0.1)' }}>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h2 className="fw-bold text-primary mb-1" style={{ fontSize: '2.5rem' }}>25K+</h2>
                                            <p className="text-muted small mb-0">Project Done</p>
                                        </div>
                                        <div className="bg-light rounded-circle p-2" style={{ color: '#8B5CF6' }}>
                                            <FiArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Email Form */}
                                <div className="d-flex gap-2 w-100 justify-content-center justify-content-lg-end" style={{ maxWidth: '400px' }}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        className="rounded-pill px-4"
                                        style={{
                                            borderColor: 'rgba(139, 92, 246, 0.4)',
                                            background: 'rgba(255, 255, 255, 0.8)'
                                        }}
                                    />
                                    <Button className="btn-primary rounded-pill px-4" style={{ backgroundColor: '#8B5CF6', border: 'none' }}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Custom CSS for this page */}
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
                .about-faq-accordion .accordion-item {
                    border-radius: 15px !important;
                }
                .rounded-xl {
                    border-radius: 20px !important;
                }
                .bg-primary-light {
                    background-color: rgba(139, 92, 246, 0.1);
                }
            `}</style>
        </div>
    );
};

export default About;

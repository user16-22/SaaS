import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Accordion, Card, Alert } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';
import { submitContact } from '../services/api';

const Contact = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus({ type: '', msg: '' });

        try {
            // Combine names for the API if needed, or adjust API to handle both
            await submitContact({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            });
            setStatus({ type: 'success', msg: 'Message sent successfully!' });
            setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus({ type: 'danger', msg: 'Failed to send message. Please try again.' });
        }
        setSending(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="py-5 text-center position-relative overflow-hidden" style={{ backgroundColor: '#fff', minHeight: '350px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute w-100 h-100" style={{
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-2 fw-bold mb-0" style={{ letterSpacing: '-2px', color: '#000' }}>
                        Contact <span className="text-primary">Us</span>
                    </h1>
                </Container>
            </section>

            {/* Get in Touch Section */}
            <section className="py-5">
                <Container>
                    <div className="mb-5">
                        <h2 className="display-4 fw-bold" style={{ letterSpacing: '-2px' }}>
                            Get in Touch <span className="text-primary">With Us</span>
                        </h2>
                    </div>

                    <Row className="g-5 align-items-start">
                        {/* Left Side - Form */}
                        <Col lg={7}>
                            {status.msg && <Alert variant={status.type} className="rounded-xl">{status.msg}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Row className="g-3 mb-4">
                                    <Col md={6}>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="rounded-pill px-4 border border-light py-3 shadow-none text-muted"
                                            style={{ backgroundColor: '#fcfcfc', border: '1px solid #eee' }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="rounded-pill px-4 border border-light py-3 shadow-none text-muted"
                                            style={{ backgroundColor: '#fcfcfc', border: '1px solid #eee' }}
                                        />
                                    </Col>
                                </Row>
                                <div className="mb-4">
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="rounded-pill px-4 border border-light py-3 shadow-none text-muted"
                                        style={{ backgroundColor: '#fcfcfc', border: '1px solid #eee' }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="rounded-pill px-4 border border-light py-3 shadow-none text-muted"
                                        style={{ backgroundColor: '#fcfcfc', border: '1px solid #eee' }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <Form.Control
                                        as="textarea"
                                        rows={8}
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="rounded-xl px-4 border border-light py-3 shadow-none text-muted"
                                        style={{ backgroundColor: '#fcfcfc', border: '1px solid #eee', borderRadius: '30px' }}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="btn-primary rounded-pill px-5 py-2 fw-bold"
                                    style={{ backgroundColor: '#8B5CF6', border: 'none' }}
                                    disabled={sending}
                                >
                                    {sending ? 'Sending...' : 'Submit'}
                                </Button>
                            </Form>
                        </Col>

                        {/* Right Side - Visual & Info */}
                        <Col lg={5}>
                            <div className="ps-lg-4">
                                {/* Abstract 3D Asset with Custom Shape - Exact Notch */}
                                <div className="position-relative mb-4" style={{ height: '340px' }}>
                                    {/* Using a SVG mask for the exact shape or a clever clip-path */}
                                    <div className="w-100 h-100" style={{
                                        clipPath: 'path("M 0 30 Q 0 0 30 0 L 470 0 Q 500 0 500 30 L 500 310 Q 500 340 470 340 L 320 340 Q 290 340 290 310 L 290 280 Q 290 250 260 250 L 30 250 Q 0 250 0 220 Z")',
                                        background: '#8B5CF6'
                                    }}>
                                        <img
                                            src="/images/blog-1.png"
                                            alt="Abstract 3D"
                                            className="w-100 h-100 object-fit-cover shadow-sm"
                                        />
                                    </div>
                                    {/* Fallback for browsers that don't support path clip-path reliably */}
                                    <style>{`
                                        @supports not (clip-path: path("M0 0")) {
                                            .custom-notch-image {
                                                border-radius: 40px;
                                                mask-image: linear-gradient(to right, transparent 60%, black 60%), linear-gradient(to top, transparent 20%, black 20%);
                                                mask-composite: exclude;
                                            }
                                        }
                                    `}</style>
                                </div>

                                {/* Contact Details Card */}
                                <Card className="border-0 shadow-none p-4 p-lg-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '40px' }}>
                                    <h3 className="fw-bold mb-4" style={{ color: '#002B5B', fontSize: '1.75rem' }}>Contact Us</h3>
                                    <div className="mb-1">
                                        <p className="fw-bold mb-2" style={{ color: '#F48C06', fontSize: '1.05rem' }}>(105) 115-2920</p>
                                        <p className="fw-medium mb-1 text-muted" style={{ fontSize: '1rem', letterSpacing: '0.2px' }}>115 Wood Street, USA</p>
                                        <p className="fw-medium mb-0 text-muted" style={{ fontSize: '1rem', letterSpacing: '0.2px' }}>support@naaron.com</p>
                                    </div>
                                </Card>
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
            <section className="py-5 position-relative overflow-hidden">
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                    backgroundImage: 'url(/images/testimonial-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                    zIndex: 0
                }}></div>

                <Container className="position-relative z-1">
                    <Row className="align-items-center g-4">
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
                        <Col lg={4} className="text-center">
                            <img
                                src="/images/banner-3d.png"
                                alt="3D Abstract"
                                className="img-fluid"
                                style={{ maxHeight: '350px', transform: 'scale(1.1)' }}
                            />
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex flex-column gap-4 align-items-center align-items-lg-end">
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
                                <div className="d-flex gap-2 w-100 justify-content-center justify-content-lg-end" style={{ maxWidth: '400px' }}>
                                    <Form.Control type="email" placeholder="Email" className="rounded-pill px-4" style={{ borderColor: 'rgba(139, 92, 246, 0.4)', background: 'rgba(255, 255, 255, 0.8)' }} />
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

export default Contact;

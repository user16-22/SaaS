import { Container, Row, Col, Card, Accordion, Button, Form } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';

const Blog = () => {
    const newsItems = [
        { title: 'Behind the Scenes: Our Creative Process', img: '/images/blog-1.png' },
        { title: 'New Partnership Announcement', img: '/images/blog-2.png' },
        { title: 'Client Success Story: Boosting Sales', img: '/images/blog-3.png' },
        { title: 'Our Software Reaches 10,000+ Active Users', img: '/images/blog-1.png' },
        { title: 'Scaling Your Business with SaaS Tools', img: '/images/blog-2.png' },
        { title: 'New Automation Features Released', img: '/images/blog-3.png' }
    ];

    return (
        <div className="news-page">

            {/* Content Section */}
            <section className="py-5" style={{ paddingTop: '120px' }}>
                <Container>
                    <div className="text-center mb-5" style={{ marginTop: '40px' }}>
                        <h2 className="display-5 fw-bold" style={{ letterSpacing: '-1.5px' }}>Our Company <span className="text-primary">News</span></h2>
                    </div>

                    <Row className="g-0">
                        {newsItems.map((item, idx) => (
                            <Col md={4} key={idx}>
                                <Card className="border-0 h-100 bg-transparent p-3">
                                    <div className="rounded-xl overflow-hidden mb-2 shadow-sm" style={{ aspectRatio: '16/10' }}>
                                        <Card.Img variant="top" src={item.img} className="h-100 w-100 object-fit-cover hover-scale" />
                                    </div>
                                    <Card.Body className="p-0 d-flex flex-column align-items-start text-start">
                                        <Card.Title className="fw-bold mb-2" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
                                             {item.title}
                                        </Card.Title>
                                        <Card.Text className="text-muted small mb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                        </Card.Text>
                                        <div>
                                            <Button className="rounded-pill px-4 py-2 fw-bold shadow-sm" style={{ backgroundColor: '#8B5CF6', border: 'none' }}>
                                                Read More
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold" style={{ letterSpacing: '-1.5px' }}>Frequently Asked<br /><span className="text-primary">Questions</span></h2>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Accordion defaultActiveKey="0" className="about-faq-accordion">
                                {[
                                    { q: 'How does the platform work?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit ligula at vehicula ornare, sem dolor facilisis libero, nec eleifend felis sapien ac diam. Morbi elementum urna arcu, sed sodales tellus venenatis at. Aliquam blandit nisl a ultrices laoreet.' },
                                    { q: 'Do I need technical skills to use it?', a: 'No technical skills are required. Our platform is designed to be user-friendly and intuitive for everyone.' },
                                    { q: 'Can I upgrade or downgrade my plan anytime?', a: 'Yes, you can change your subscription plan at any time through your account settings.' },
                                    { q: 'Do you offer customer support?', a: 'We offer 24/7 customer support via email and live chat to help you with any issues.' }
                                ].map((item, idx) => (
                                    <Accordion.Item eventKey={String(idx)} key={idx} className="border-0 mb-3 rounded-xl overflow-hidden shadow-sm">
                                        <Accordion.Header className="fw-bold">{item.q}</Accordion.Header>
                                        <Accordion.Body className="text-muted">{item.a}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Bottom Banner */}
            <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#fff' }}>
                <div className="position-absolute" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', top: '10%', left: '-10%', zIndex: 0 }}></div>
                <div className="position-absolute" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', bottom: '10%', right: '-10%', zIndex: 0 }}></div>
                <Container className="position-relative z-1">
                    <Row className="align-items-center g-4">
                        <Col lg={4}>
                            <div>
                                <h2 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>
                                    Let's Unlock <br /><span className="text-primary">Your Potential</span>
                                </h2>
                                <p className="text-muted small mb-0" style={{ maxWidth: '350px', opacity: 0.8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.</p>
                            </div>
                        </Col>
                        <Col lg={4} className="text-center">
                            <img src="/images/banner-3d.png" alt="3D Abstract" className="img-fluid" style={{ maxHeight: '350px', transform: 'scale(1.2)' }} />
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex flex-column gap-4 align-items-lg-end align-items-center">
                                <div className="bg-white rounded-xl shadow-lg p-4 position-relative" style={{ width: '280px', border: '1px solid rgba(139, 92, 246, 0.1)', transform: 'translateY(-20px)' }}>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h2 className="fw-bold text-primary mb-1" style={{ fontSize: '2.5rem', letterSpacing: '-1px' }}>25K+</h2>
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
                .about-faq-accordion .accordion-button { background-color: #f8f9fa; color: #000; font-weight: 600; padding: 1.5rem; border: none; }
                .about-faq-accordion .accordion-button:not(.collapsed) { background-color: #8B5CF6; color: white; box-shadow: none; }
                .about-faq-accordion .accordion-button::after { filter: grayscale(1) brightness(0); }
                .about-faq-accordion .accordion-button:not(.collapsed)::after { filter: brightness(0) invert(1); }
                .rounded-xl { border-radius: 20px !important; }
                .hover-scale { transition: transform 0.3s ease; }
                .hover-scale:hover { transform: scale(1.05); }
            `}</style>
        </div>
    );
};

export default Blog;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchHomeData } from '../services/api'; // Keeping API call for dynamic data mixed with static layout
import { FaPlay, FaArrowRight, FaCheckCircle, FaStar, FaCloud } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Home = () => {
    // We will mostly use static content to match the design EXACTLY, 
    // but we can still fetch dynamic data (like blog posts) if needed.
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchHomeData().then(res => setData(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section text-center position-relative">
                <div className="hero-bg-grid"></div> {/* Grid Background Pattern */}

                <Container style={{ position: 'relative', zIndex: 10 }}>
                    <h1 className="display-3 fw-bold mb-2 pt-5">
                        Transform Your Business
                    </h1>
                    <h1 className="display-3 fw-bold mb-5 text-primary">
                        With Smarter Software
                    </h1>

                    {/* 3D Cards Container - Desktop Grid 3 Cols, Mobile 1 Col */}
                    <div className="hero-3d-container d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center gap-4 py-5 mx-auto" style={{ maxWidth: '1200px' }}>

                        {/* Left Card - Hidden on mobile */}
                        <div className="hero-card-side hero-card-left position-relative rounded-xl shadow-lg p-3 d-none d-lg-flex flex-column align-items-center justify-content-center text-white" style={{ backgroundImage: 'url(/assets/images/hero/hero-left.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

                            {/* Floating Top-Left Card */}
                            <div className="floating-stat-box position-absolute bg-white rounded-xl shadow-custom p-3 text-start border border-primary border-opacity-25" style={{ top: '-30px', left: '-20px', width: '160px', zIndex: 30 }}>
                                <div className="avatar-group mb-2 justify-content-start d-flex">
                                    {[1, 2, 3, 4].map(i => (
                                        <img key={i} src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} className="rounded-circle border border-white" width="30" alt="avatar" style={{ marginLeft: i > 1 ? '-10px' : 0 }} />
                                    ))}
                                </div>
                                <small className="fw-bold text-dark">1442+ Clients</small>
                            </div>

                            {/* Floating Bottom-Left Card */}
                            <div className="floating-stat-box position-absolute bg-white rounded-xl shadow-custom p-3 text-start border border-primary border-opacity-25" style={{ bottom: '-30px', left: '10px', width: '160px', zIndex: 30 }}>
                                <h5 className="text-primary fw-bold mb-0">567k+</h5>
                                <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>Workflow Boosted</small>
                            </div>
                        </div>

                        {/* Center Card */}
                        <div className="hero-card-center position-relative rounded-xl shadow-2xl p-0 overflow-hidden text-white d-flex align-items-center justify-content-center" style={{ width: '350px', height: '420px', zIndex: 20, backgroundImage: 'url(/assets/images/hero/hero-1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="badge-pill-frosted position-absolute top-0 start-0 mt-4 ms-4 px-3 py-1 rounded-pill small">
                                <span className="dot bg-primary me-2"></span> Software
                            </div>
                            {/* Main 3D Shape Asset */}
                            <img src="/assets/images/hero/hero-3.png" alt="Main 3D" className="img-fluid transform-scale-110" />
                        </div>

                        {/* Right Card - Hidden on mobile */}
                        <div className="hero-card-side hero-card-right position-relative rounded-xl shadow-lg p-3 d-none d-lg-flex flex-column align-items-center justify-content-center text-white" style={{ backgroundImage: 'url(/assets/images/hero/hero-right.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

                            {/* Floating Top-Right Card */}
                            <div className="floating-stat-box position-absolute bg-white rounded-xl shadow-custom p-3 text-start border border-primary border-opacity-50" style={{ top: '-30px', right: '-20px', width: '160px', zIndex: 30 }}>
                                <h5 className="text-primary fw-bold mb-0">567k+</h5>
                                <small className="text-muted" style={{ fontSize: '0.75rem' }}>Workflow Boosted</small>
                            </div>

                            {/* Floating Bottom-Right Card */}
                            <div className="floating-stat-box position-absolute bg-white rounded-xl shadow-custom p-3 text-start border border-primary border-opacity-50" style={{ bottom: '-30px', right: '10px', width: '160px', zIndex: 30 }}>
                                <h5 className="text-primary fw-bold mb-0">350k+</h5>
                                <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>Client Projects</small>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-4 mt-5 pt-3">
                        <Button variant="primary" size="lg" className="px-5 rounded-pill shadow-lg text-white" style={{ backgroundColor: '#8B5CF6', border: 'none' }}>Get Started</Button>
                        <Link to="/contact" className="text-muted text-decoration-none fw-medium">Contact Us</Link>
                    </div>

                </Container>
            </section>

            {/* Powerful Advantages */}
            <section className="py-5 advantages-section-bg">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title fw-bold">Powerful Advantages<br /><span className="text-primary">That Drive Your Success</span></h2>
                    </div>

                    <Row className="g-4">
                        {/* Left Column (Wide + Split) */}
                        <Col lg={8}>
                            {/* Top Wide Card */}
                            <div className="bg-white border border-light rounded-xl p-4 mb-4 position-relative overflow-hidden">
                                <Row className="align-items-center">
                                    <Col md={7}>
                                        <h3 className="fw-bold mb-3">Cloud Based<br />Performance</h3>
                                        <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.</p>
                                        <Button variant="light" className="rounded-pill px-4 fw-bold border border-2 border-dark bg-white">Get Started</Button>
                                    </Col>
                                    <Col md={5}>
                                        <img src="/assets/images/advantages/adv-dashboard.png" alt="Dashboard" className="img-fluid rounded-3 shadow-sm" />
                                    </Col>
                                </Row>
                            </div>

                            <Row className="g-4">
                                {/* Bottom Left Small Card */}
                                <Col md={6}>
                                    <div className="bg-white border border-light rounded-xl p-4 h-100">
                                        <h3 className="fw-bold mb-3">Cloud Based<br />Performance</h3>
                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.</p>
                                    </div>
                                </Col>
                                {/* Bottom Right Purple Card */}
                                <Col md={6}>
                                    <div className="bg-primary-gradient rounded-xl p-4 h-100 text-white d-flex flex-column justify-content-between position-relative overflow-hidden">
                                        <div>
                                            <h3 className="fw-bold mb-3">View More</h3>
                                            <p className="text-white-50 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                        <div className="text-end mt-4">
                                            <FaArrowRight className="display-6" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        {/* Right Column (Tall Card) */}
                        <Col lg={4}>
                            <div className="bg-white border border-light rounded-xl p-4 h-100 d-flex flex-column">
                                <h3 className="fw-bold mb-3">Real Time<br />Collaboration</h3>
                                <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.</p>

                                <div className="mt-auto">
                                    <img src="/assets/images/advantages/adv-files.png" alt="Collaboration UI" className="img-fluid rounded-3 shadow-sm w-100" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Insights Section */}
            <section className="py-5 overflow-hidden">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <h2 className="display-5 fw-bold mb-4">Insights That Drive<br /><span className="text-primary">Smarter Decisions</span></h2>
                            <p className="text-muted mb-5" style={{ maxWidth: '450px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                            </p>

                            {/* Stats Box */}
                            <div className="bg-light border border-light rounded-xl p-4 mb-5 d-flex align-items-center shadow-sm" style={{ maxWidth: '500px' }}>
                                <div className="flex-fill pe-4 border-end border-light">
                                    <h3 className="fw-bold text-primary mb-0">25K+</h3>
                                    <small className="text-muted">Project Done</small>
                                </div>
                                <div className="flex-fill ps-4">
                                    <h3 className="fw-bold text-primary mb-0">99.2%</h3>
                                    <small className="text-muted">Track Performance</small>
                                </div>
                            </div>

                            <Button variant="primary" className="rounded-pill px-5 py-3 fw-bold shadow-lg">Get Started</Button>
                        </Col>

                        <Col lg={6} className="position-relative mt-5 mt-lg-0">
                            {/* Decorative Background Cards - Shown only on desktop via CSS */}
                            <div className="insights-decoration-bg position-absolute d-none d-lg-block" style={{ top: '20px', right: '40px', width: '300px', height: '400px', background: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)', borderRadius: '40px', opacity: 0.6, zIndex: 1, transform: 'rotate(5deg)' }}></div>
                            <div className="insights-decoration-bg position-absolute d-none d-lg-block" style={{ top: '60px', right: '80px', width: '300px', height: '400px', background: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)', borderRadius: '40px', opacity: 0.4, zIndex: 0, transform: 'rotate(10deg)' }}></div>

                            {/* Main 3D Composition */}
                            <div className="position-relative text-center" style={{ zIndex: 5 }}>
                                <img src="/assets/images/insights/insights-3d.png" alt="3D Abstract" className="img-fluid" style={{ maxWidth: '100%' }} />

                                {/* Floating Stat Card - Hidden on Mobile via CSS */}
                                <div className="floating-stat-box position-absolute bg-white rounded-xl p-3 border border-primary border-opacity-25 shadow-lg d-none d-md-block" style={{ top: '40%', left: '-20px', width: '150px', zIndex: 10 }}>
                                    <h5 className="text-primary fw-bold mb-0">350k+</h5>
                                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Client Projects</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Innovation Section */}
            <section className="py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Innovation That<br /><span className="text-primary">Delivers Real Results</span></h2>
                        <p className="text-muted mx-auto mt-3" style={{ maxWidth: '600px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                        </p>
                    </div>

                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <div className="bg-white border border-light shadow-sm rounded-xl p-4 p-md-5 h-100">
                                <h3 className="fw-bold mb-3">Seamless<br />Integration</h3>
                                <p className="text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                </p>
                                <img src="/assets/images/innovation/inn-storage.png" className="img-fluid rounded-3" alt="Integration" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="bg-white border border-light shadow-sm rounded-xl p-4 p-md-5 h-100">
                                <h3 className="fw-bold mb-3">Reliable<br />Performance</h3>
                                <p className="text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                                </p>
                                <img src="/assets/images/innovation/inn-subscribe.png" className="img-fluid rounded-3" alt="Performance" />
                            </div>
                        </Col>
                    </Row>

                    <div className="bg-primary-gradient rounded-xl p-4 p-md-5 text-white position-relative overflow-hidden">
                        <Row className="align-items-center">
                            <Col md={5}>
                                <h3 className="fw-bold mb-3">Dedicated Support Team</h3>
                                <p className="text-white-50 mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.
                                </p>
                            </Col>
                            <Col md={7}>
                                <div className="ps-md-5 mt-4 mt-md-0">
                                    <img src="/assets/images/innovation/inn-timeline.png" alt="Support" className="img-fluid rounded-3 shadow-sm" />
                                </div>
                            </Col>
                        </Row>
                        <div className="position-absolute" style={{ bottom: '20px', right: '30px' }}>
                            <FaArrowRight className="display-6 text-white" style={{ transform: 'rotate(45deg)' }} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* How It Works */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col lg={7}>
                            <h2 className="display-5 fw-bold mb-0">How It <span className="text-primary">Works</span></h2>
                        </Col>
                        <Col lg={5} className="text-lg-end mt-3 mt-lg-0">
                            <p className="text-muted small mb-0" style={{ maxWidth: '300px', marginLeft: 'auto' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {[
                            { step: '01', title: 'Create Account & Set Up', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.', purple: false },
                            { step: '02', title: 'Set Up Workspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.', purple: false },
                            { step: '03', title: 'Plan & Optimize', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.', purple: true },
                            { step: '04', title: 'Implement & Launch', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.', purple: false }
                        ].map((item, idx) => (
                            <Col md={6} key={idx}>
                                <div className={`rounded-xl p-4 p-md-5 h-100 border ${item.purple ? 'bg-primary-gradient border-primary text-white' : 'bg-light-gray border-light'}`} style={{ minHeight: '220px' }}>
                                    <div className={`fw-bold display-6 mb-3 ${item.purple ? 'text-white' : 'text-primary'}`}>{item.step}</div>
                                    <h3 className="fw-bold mb-3">{item.title}</h3>
                                    <p className={`${item.purple ? 'text-white-50' : 'text-muted'} mb-0`}>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Pricing Section */}
            <section className="py-5 bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-0">Flexible Pricing for<br /><span className="text-primary">Every Business</span></h2>
                    </div>

                    <Row className="g-4">
                        {/* Left Column - Tall Card */}
                        <Col lg={4}>
                            <div className="bg-light border border-light rounded-xl p-4 p-md-5 h-100 d-flex flex-column shadow-sm overflow-hidden position-relative">
                                <div className="mb-4">
                                    <Badge bg="primary" className="rounded-pill px-3 py-2 mb-4">Best Seller</Badge>
                                    <div className="display-4 fw-bold mb-2 text-primary">$425<span className="fs-6 text-muted ms-1">/Month</span></div>
                                    <p className="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <hr className="my-4 opacity-25" />
                                <ul className="list-unstyled mb-5 flex-grow-1">
                                    {['10 Team Members', '10 GB Cloud Storage', 'Premium Support', 'Advanced analytics', 'Custom integrations', 'Priority email support'].map((item, idx) => (
                                        <li key={idx} className="mb-3 small d-flex align-items-center">
                                            <span className="me-2 rounded-circle bg-primary" style={{ width: '6px', height: '6px' }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="primary" className="rounded-pill py-3 fw-bold w-100 mt-auto">Choose Plan</Button>
                            </div>
                        </Col>

                        {/* Right Grid - 2 Top Cards + 1 Bottom Wide Card */}
                        <Col lg={8}>
                            <Row className="g-4 h-100">
                                {/* Top Left Small */}
                                <Col md={6}>
                                    <div className="bg-white border border-light rounded-xl p-4 shadow-sm h-100">
                                        <h4 className="fw-bold mb-4">Basic Plan</h4>
                                        <div className="display-5 fw-bold mb-4 text-primary">$255<span className="fs-6 text-muted ms-1">/Month</span></div>
                                        <ul className="list-unstyled mb-4">
                                            {['10 Team Members', '10 GB Cloud Storage', 'Premium Support'].map((item, idx) => (
                                                <li key={idx} className="mb-2 small d-flex align-items-center">
                                                    <span className="me-2 rounded-circle bg-primary" style={{ width: '6px', height: '6px' }}></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant="primary" className="rounded-pill py-2 w-100 fw-bold">Choose Plan</Button>
                                    </div>
                                </Col>

                                {/* Top Right Small */}
                                <Col md={6}>
                                    <div className="bg-white border border-light rounded-xl p-4 shadow-sm h-100">
                                        <div className="d-flex justify-content-between align-items-start mb-4">
                                            <h4 className="fw-bold mb-0">Basic Plan</h4>
                                        </div>
                                        <div className="display-5 fw-bold mb-4 text-primary">$355<span className="fs-6 text-muted ms-1">/Month</span></div>
                                        <ul className="list-unstyled mb-4">
                                            {['10 Team Members', '10 GB Cloud Storage', 'Premium Support'].map((item, idx) => (
                                                <li key={idx} className="mb-2 small d-flex align-items-center">
                                                    <span className="me-2 rounded-circle bg-primary" style={{ width: '6px', height: '6px' }}></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant="primary" className="rounded-pill py-2 w-100 fw-bold">Choose Plan</Button>
                                    </div>
                                </Col>

                                {/* Bottom Wide Card */}
                                <Col xs={12}>
                                    <div className="bg-primary-gradient border-0 rounded-xl p-4 p-md-5 text-white shadow-lg overflow-hidden h-100">
                                        <Row className="align-items-center g-4">
                                            <Col md={5}>
                                                <h3 className="fw-bold mb-2">Enterprise Plan</h3>
                                                <div className="display-4 fw-bold mb-4">$755<span className="fs-6 text-white-50 ms-1">/Month</span></div>
                                                <Button variant="light" className="rounded-pill py-2 px-5 fw-bold text-primary">Choose Plan</Button>
                                            </Col>
                                            <Col md={7}>
                                                <Row className="g-2">
                                                    <Col sm={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            {['10 Team Members', '10 GB Cloud Storage', 'Premium Support', 'Advanced analytics', 'Custom integrations'].map((item, idx) => (
                                                                <li key={idx} className="mb-2 small d-flex align-items-center">
                                                                    <span className="me-2 rounded-circle bg-white" style={{ width: '4px', height: '4px' }}></span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            {['10 Team Members', '10 GB Cloud Storage'].map((item, idx) => (
                                                                <li key={idx} className="mb-2 small d-flex align-items-center">
                                                                    <span className="me-2 rounded-circle bg-white" style={{ width: '4px', height: '4px' }}></span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Integrations Section */}
            <section className="py-5 overflow-hidden">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <h2 className="display-5 fw-bold mb-4">Integration Made<br /><span className="text-primary">Simple and Efficient</span></h2>
                            <p className="text-muted mb-3" style={{ maxWidth: '450px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.
                            </p>
                            <p className="text-muted mb-5" style={{ maxWidth: '450px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est. In suscipit magna quis lobortis ultrices.
                            </p>
                            <Button variant="primary" className="rounded-pill px-5 py-2 fw-bold shadow-lg">Connect Now</Button>
                        </Col>

                        <Col lg={6} className="position-relative mt-5 mt-lg-0">
                            <div className="integrations-cards-wrapper position-relative py-5 py-lg-0" style={{ minHeight: '400px' }}>
                                {/* Top White Card */}
                                <div className="bg-light border border-light rounded-xl p-4 shadow-sm position-absolute"
                                    style={{ top: '0', right: '0', width: '80%', zIndex: 1 }}>
                                    <h4 className="fw-bold mb-3">Powerful Work Integration</h4>
                                    <p className="text-muted small mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.
                                    </p>
                                </div>

                                {/* Bottom Purple Card */}
                                <div className="bg-primary-gradient rounded-xl p-4 shadow-lg position-absolute"
                                    style={{ bottom: '40px', left: '0', width: '80%', zIndex: 2 }}>
                                    <h4 className="fw-bold text-white mb-3">Powerful Work Integration</h4>
                                    <p className="text-white-50 small mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel purus est.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Expert Team Section */}
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
                            <Col md={6} lg={4} key={idx} className="team-col">
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

            {/* Testimonials Section */}
            <section className="py-5" style={{
                backgroundImage: 'url(/images/testimonial-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-0">Hear from Our<br /><span className="text-primary">Happy Customers</span></h2>
                    </div>

                    <Row className="g-4 align-items-center mt-5">
                        {/* Left Side - Overlapping Stack */}
                        <Col lg={6} className="position-relative py-lg-5">
                            <div className="testimonial-stack position-relative" style={{ height: '400px' }}>
                                {/* David Wilson Portrait (Overlapping) - Hidden on medium and down or repositioned */}
                                <div className="position-absolute d-none d-lg-block" style={{ top: '20px', left: '-40px', zIndex: 3, width: '350px' }}>
                                    <img
                                        src="/images/testimonial-david.png"
                                        alt="David Wilson"
                                        className="img-fluid"
                                        style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                                    />
                                </div>

                                {/* Top White Card (James Reed) */}
                                <div className="bg-white border border-light rounded-xl p-4 shadow-sm position-absolute"
                                    style={{ top: '20px', right: '0', width: '68%', zIndex: 1 }}>
                                    <p className="text-muted small mb-3">
                                        "We've tried several platforms before, but this one stands out for its clean interface and seamless integration."
                                    </p>
                                    <h6 className="fw-bold mb-0 small text-muted">James Reed</h6>
                                </div>

                                {/* Bottom Purple Card (David Wilson) */}
                                <div className="bg-primary-gradient rounded-xl p-4 shadow-lg position-absolute"
                                    style={{ bottom: '40px', right: '0', width: '68%', zIndex: 2 }}>
                                    <p className="text-white small mb-3">
                                        "This software helped our team work twice as fast. The automation feature saved us every week."
                                    </p>
                                    <h6 className="fw-bold text-white mb-0 small">David Wilson</h6>
                                </div>
                            </div>
                        </Col>

                        {/* Right Side - Large Card */}
                        <Col lg={6} className="mt-5 mt-lg-0">
                            <div className="bg-white border border-light rounded-xl shadow-sm p-4 p-md-5 h-100 position-relative d-flex flex-column"
                                style={{ minHeight: '450px', background: 'radial-gradient(circle at 70% 30%, #F8F7FF 0%, #FFFFFF 100%)' }}>
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold mb-3">"The support team is incredibly responsive."</h3>
                                    <p className="text-muted small">James Reed</p>
                                </div>
                                <div className="mt-auto d-flex justify-content-center">
                                    <img
                                        src="/images/testimonial-james.png"
                                        alt="James Reed"
                                        className="img-fluid"
                                        style={{ maxHeight: '380px', width: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
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

        </>
    );
};

export default Home;

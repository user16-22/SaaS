import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="footer-section pt-5 pb-4 text-white" style={{ background: '#110C24' }}>
            <Container>
                {/* Main Footer Content */}
                <Row className="g-5 mb-5 pb-4 border-bottom border-white border-opacity-10 text-center text-md-start">
                    {/* Brand Column */}
                    <Col lg={4} md={12} className="mb-4 mb-lg-0">
                        <div className="footer-logo mb-4 d-flex justify-content-center justify-content-md-start">
                            <Link to="/" className="text-white text-decoration-none d-flex align-items-center gap-2">
                                <span className="fw-bold fs-3" style={{ letterSpacing: '-1px' }}>SOFT<span className="text-primary">LUXE</span></span>
                            </Link>
                        </div>
                        <p className="text-white mb-4 pe-lg-5 opacity-90" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                            We provide innovative software solutions designed to transform your business processes 
                            and drive exceptional growth.
                        </p>
                        <div className="d-flex gap-3 social-icons justify-content-center justify-content-md-start">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover-primary transition-all p-2 rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <IoLogoLinkedin size={22} color="white" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover-primary transition-all p-2 rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <IoLogoInstagram size={22} color="white" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover-primary transition-all p-2 rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <IoLogoTwitter size={22} color="white" />
                            </a>
                        </div>
                    </Col>

                    {/* Quick Links Column */}
                    <Col lg={2} md={4} className="mb-4 mb-md-0">
                        <h6 className="fw-bold text-white mb-4" style={{ fontSize: '1.1rem' }}>Sitemap</h6>
                        <ul className="list-unstyled d-flex flex-column gap-3 small">
                            <li><Link to="/" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">Home</Link></li>
                            <li><Link to="/about" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">About Us</Link></li>
                            <li><Link to="/services" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">Services</Link></li>
                            <li><Link to="/contact" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">Contact Us</Link></li>
                        </ul>
                    </Col>

                    {/* Services Column */}
                    <Col lg={3} md={4} className="mb-4 mb-md-0">
                        <h6 className="fw-bold text-white mb-4" style={{ fontSize: '1.1rem' }}>Solutions</h6>
                        <ul className="list-unstyled d-flex flex-column gap-3 small">
                            <li><Link to="/web-development" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">Web Development</Link></li>
                            <li><Link to="/mobile-apps" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">Mobile Applications</Link></li>
                            <li><Link to="/saas-solutions" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">SaaS Solutions</Link></li>
                            <li><Link to="/digital-marketing" className="text-white opacity-90 text-decoration-none hover-white hover-translate transition-all d-inline-block">Digital Marketing</Link></li>
                        </ul>
                    </Col>

                    {/* Contact Info Column */}
                    <Col lg={3} md={4}>
                        <h6 className="fw-bold text-white mb-4" style={{ fontSize: '1.1rem' }}>Get in Touch</h6>
                        <ul className="list-unstyled d-flex flex-column gap-3 small align-items-center align-items-md-start">
                            <li className="text-white d-flex align-items-center gap-3">
                                <div className="bg-white bg-opacity-10 p-2 rounded text-white d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                    <MdPhone size={18} color="white" />
                                </div>
                                <span className="opacity-90">(105) 115-2920</span>
                            </li>
                            <li className="text-white d-flex align-items-center gap-3">
                                <div className="bg-white bg-opacity-10 p-2 rounded text-white d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                    <MdLocationOn size={18} color="white" />
                                </div>
                                <span className="opacity-90">115 Wood St, USA</span>
                            </li>
                            <li className="text-white d-flex align-items-center gap-3">
                                <div className="bg-white bg-opacity-10 p-2 rounded text-white d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                    <MdEmail size={18} color="white" />
                                </div>
                                <span className="opacity-90">support@softluxe.com</span>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/* Footer Bottom Bar */}
                <Row className="align-items-center pt-2">
                    <Col md={6}>
                        <p className="text-white-50 small mb-0">
                            &copy; {new Date().getFullYear()} Softluxe Inc. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex gap-4 justify-content-md-end mt-3 mt-md-0">
                            <Link to="/terms" className="text-white-50 text-decoration-none small hover-white transition-all">Terms & Conditions</Link>
                            <Link to="/privacy" className="text-white-50 text-decoration-none small hover-white transition-all">Privacy Policy</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .hover-primary:hover { color: #8B5CF6 !important; background-color: rgba(139, 92, 246, 0.1) !important; }
                .hover-white:hover { color: white !important; }
                .text-white-50 { opacity: 0.6; }
                .transition-all { transition: all 0.3s ease; }
            `}</style>
        </footer>
    );
};

export default Footer;

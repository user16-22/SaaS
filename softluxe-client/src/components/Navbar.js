import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            fixed="top"
            className={`transition-all duration-300 ${scrolled ? 'shadow-sm py-2' : 'py-4'}`}
            style={{ 
                backgroundColor: '#ffffff',
                zIndex: 1000,
                transition: 'all 0.3s ease-in-out'
            }}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-dark d-flex align-items-center">
                    <span style={{ letterSpacing: '-1.5px' }}>SOFT<span className="text-primary">LUXE</span></span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0 align-items-center gap-lg-4">
                        <Nav.Link as={NavLink} to="/" end className="nav-link-custom fw-medium">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link-custom fw-medium">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="nav-link-custom fw-medium">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className="nav-link-custom fw-medium">Our News</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center">
                        <Link to="/contact" className="text-decoration-none">
                            <button 
                                className="btn btn-primary rounded-pill px-4 py-2 fw-bold text-white shadow-sm hover-elevate" 
                                style={{ 
                                    backgroundColor: '#8B5CF6', 
                                    border: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>

            <style>{`
                .nav-link-custom {
                    color: #4B5563 !important;
                    position: relative;
                    transition: color 0.3s ease;
                }
                .nav-link-custom:hover, .nav-link-custom.active {
                    color: #8B5CF6 !important;
                }
                .nav-link-custom::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #8B5CF6;
                    transition: width 0.3s ease;
                }
                .nav-link-custom:hover::after, .nav-link-custom.active::after {
                    width: 100%;
                }
                .hover-elevate:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3) !important;
                }
                .backdrop-blur-md {
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }
            `}</style>
        </Navbar>
    );
};

export default Navigation;

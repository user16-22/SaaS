import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Team = () => {
    return (
        <div className="team-page">
            {/* Meet Our Expert Team Section */}
            <section className="position-relative overflow-hidden" style={{ paddingTop: '180px', paddingBottom: '80px' }}>
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, opacity: 0.4, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
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

                    <div className="text-center mt-5 pt-5">
                        <h2 className="display-6 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>Join Our <span className="text-primary">Journey</span></h2>
                        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>We are always looking for passionate individuals who want to redefine the future of software construction.</p>
                        <Button variant="primary" className="rounded-pill px-5 py-3 fw-bold shadow-lg" href="/contact">See Open Positions</Button>
                    </div>
                </Container>
            </section>

            <style>{`
                .team-page {
                    background-color: #fff;
                }
            `}</style>
        </div>
    );
};

export default Team;

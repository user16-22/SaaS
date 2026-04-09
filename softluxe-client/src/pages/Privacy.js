import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Privacy = () => {
    return (
        <div className="privacy-page">
            {/* Header Section */}
            <section className="py-5 text-center position-relative overflow-hidden" 
                style={{ 
                    backgroundColor: '#F8F7FF', 
                    paddingTop: '150px !important', 
                    minHeight: '300px', 
                    display: 'flex', 
                    alignItems: 'center',
                    borderBottom: '1px solid #eee'
                }}>
                <Container style={{ paddingTop: '80px' }}>
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1F1F1F', letterSpacing: '-1.5px' }}>
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-muted">Last updated: April 6, 2026</p>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="privacy-content">
                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">1. Information Collection</h3>
                                    <p className="text-muted leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        We collect information that you provide directly to us when you create an account, 
                                        update your profile, or use our services. This information may include your name, 
                                        email address, payment information, and any other details you choose to provide.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">2. Use of Information</h3>
                                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        We use the information we collect to provide, maintain, and improve our services, 
                                        to process your transactions, and to communicate with you about your account and 
                                        our latest updates. Specifically, we use your data to:
                                    </p>
                                    <ul className="text-muted mt-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                        <li>Operate and improve our platform functionality.</li>
                                        <li>Provide customer support and respond to your requests.</li>
                                        <li>Send technical notices, updates, and administrative messages.</li>
                                        <li>Monitor and analyze trends and usage in connection with our services.</li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">3. Data Security</h3>
                                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        We take reasonable measures to help protect information about you from loss, 
                                        theft, misuse and unauthorized access, disclosure, alteration and destruction. 
                                        However, no security system is impenetrable and we cannot guarantee the security 
                                        of our database, nor can we guarantee that the information you supply will not be 
                                        intercepted while being transmitted to us over the Internet.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">4. Your Choices</h3>
                                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        You may update or correct your account information at any time by logging into 
                                        your account. If you wish to delete your account, please contact us, but note 
                                        that we may retain certain information as required by law or for legitimate 
                                        business purposes.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Privacy;

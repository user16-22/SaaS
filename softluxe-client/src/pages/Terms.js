import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Terms = () => {
    return (
        <div className="terms-page">
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
                        Terms and <span className="text-primary">Conditions</span>
                    </h1>
                    <p className="text-muted">Last updated: April 6, 2026</p>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="terms-content">
                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">1. Introduction</h3>
                                    <p className="text-muted leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        Welcome to our Software as a Service platform. By accessing our services, you agree to comply with 
                                        these terms. These Terms and Conditions govern your use of the Softluxe platform and all related 
                                        services provided by our company.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">2. Use of License</h3>
                                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        Permission is granted to temporarily download one copy of the materials (information or software) 
                                        on Softluxe's website for personal, non-commercial transitory viewing only. This is the grant of 
                                        a license, not a transfer of title, and under this license you may not:
                                    </p>
                                    <ul className="text-muted mt-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                        <li>Modify or copy the materials.</li>
                                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                                        <li>Attempt to decompile or reverse engineer any software contained on Softluxe's website.</li>
                                        <li>Remove any copyright or other proprietary notations from the materials.</li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">3. Disclaimer</h3>
                                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        The materials on Softluxe's website are provided on an 'as is' basis. Softluxe makes no 
                                        warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                                        including, without limitation, implied warranties or conditions of merchantability, 
                                        fitness for a particular purpose, or non-infringement of intellectual property or other 
                                        violation of rights.
                                    </p>
                                </div>

                                <div className="mb-5">
                                    <h3 className="fw-bold mb-3 border-bottom pb-2">4. Limitations</h3>
                                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        In no event shall Softluxe or its suppliers be liable for any damages (including, without 
                                        limitation, damages for loss of data or profit, or due to business interruption) arising out 
                                        of the use or inability to use the materials on Softluxe's website, even if Softluxe or a 
                                        Softluxe authorized representative has been notified orally or in writing of the 
                                        possibility of such damage.
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

export default Terms;

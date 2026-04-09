import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FiCheck, FiZap, FiLayers, FiActivity, FiGlobe, FiShield, FiCpu } from 'react-icons/fi';

const Pricing = () => {
    const plans = [
        {
            name: 'Essential',
            price: '29',
            badge: 'Basic',
            icon: <FiZap className="text-muted" />,
            features: ['5 Projects Included', 'Basic Workflow Automation', '10GB Secure Storage', 'Standard API Access', 'Email Support'],
            recommended: false
        },
        {
            name: 'Professional',
            price: '79',
            badge: 'Most Popular',
            icon: <FiLayers className="text-primary" />,
            features: ['Unlimited Projects', 'Advanced AI Automation', '100GB Secure Storage', 'Priority API Access', '24/7 Priority Support', 'Custom Integrations'],
            recommended: true
        },
        {
            name: 'Enterprise',
            price: '199',
            badge: 'Scalable',
            icon: <FiCpu className="text-muted" />,
            features: ['Custom Infrastructure', 'Dedicated Account Manager', '1TB+ Secure Storage', 'White-labeling Options', 'SLA Guarantee', 'On-premise Deployment'],
            recommended: false
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="text-center position-relative overflow-hidden bg-white" 
                style={{ paddingTop: '180px', paddingBottom: '80px' }}>
                <div className="position-absolute w-100 h-100" 
                    style={{ top: 0, left: 0, zIndex: 0, opacity: 0.4, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h1>
                    <p className="text-muted mx-auto mb-2" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
                        Choose the plan that's right for your business. No hidden fees.
                    </p>
                </Container>
            </section>

            {/* Pricing Grid */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="g-4 justify-content-center">
                        {plans.map((plan, idx) => (
                            <Col lg={4} md={6} key={idx}>
                                <Card className={`h-100 border-0 rounded-3xl shadow-sm transition-all hover-translate-y position-relative overflow-hidden ${plan.recommended ? 'shadow-lg border border-primary border-opacity-25' : ''}`}>
                                    {plan.recommended && (
                                        <div className="position-absolute top-0 end-0 mt-4 me-4">
                                            <Badge bg="primary" className="rounded-pill px-3 py-2 fw-bold text-white shadow-sm" style={{ backgroundColor: '#8B5CF6' }}>
                                                {plan.badge}
                                            </Badge>
                                        </div>
                                    )}
                                    <Card.Body className="p-5 d-flex flex-column text-start">
                                        <div className="mb-4 d-flex align-items-center gap-3">
                                            <div className="bg-light rounded-xl p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                                {React.cloneElement(plan.icon, { size: 28 })}
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-0">{plan.name}</h4>
                                                {!plan.recommended && <small className="text-muted fw-medium">{plan.badge}</small>}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <span className="display-4 fw-bold">${plan.price}</span>
                                            <span className="text-muted ms-2">/ month</span>
                                        </div>

                                        <hr className="my-4 opacity-5" />

                                        <div className="flex-grow-1">
                                            <p className="fw-bold small text-uppercase text-muted mb-3" style={{ letterSpacing: '1px' }}>What's included</p>
                                            <ul className="list-unstyled mb-0">
                                                {plan.features.map((feature, fIdx) => (
                                                    <li key={fIdx} className="mb-3 d-flex align-items-start gap-3">
                                                        <div className="bg-primary bg-opacity-10 rounded-circle p-1 mt-1 d-flex">
                                                            <FiCheck className="text-primary" size={14} />
                                                        </div>
                                                        <span className="text-muted small fw-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button 
                                            variant={plan.recommended ? 'primary' : 'outline-primary'} 
                                            className={`w-100 py-3 mt-5 rounded-pill fw-bold transition-all text-white border-0 ${plan.recommended ? 'shadow-lg' : 'bg-dark opacity-75'}`}
                                            style={{ backgroundColor: plan.recommended ? '#8B5CF6' : '#1F2937' }}
                                        >
                                            Get Started with {plan.name}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Core Features / FAQ Placeholder */}
            <section className="py-5 bg-white">
                <Container className="text-center py-5">
                    <h2 className="fw-bold mb-5">Features included in <span className="text-primary">all plans</span></h2>
                    <Row className="g-4">
                        {[
                            { title: 'Global Infrastructure', icon: <FiGlobe />, desc: 'Deploy your apps across 20+ edge locations worldwide.' },
                            { title: 'Secure by Design', icon: <FiShield />, desc: 'End-to-end encryption and automatic SSL for all assets.' },
                            { title: 'Powerful Analytics', icon: <FiActivity />, desc: 'Real-time insights into your application performance.' }
                        ].map((feature, idx) => (
                            <Col md={4} key={idx}>
                                <div className="p-4 rounded-xl border border-light h-100 hover-shadow transition-all">
                                    <div className="text-primary mb-3">{React.cloneElement(feature.icon, { size: 32 })}</div>
                                    <h5 className="fw-bold">{feature.title}</h5>
                                    <p className="text-muted small mb-0">{feature.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <style>{`
                .rounded-3xl { border-radius: 2rem !important; }
                .rounded-xl { border-radius: 1rem !important; }
                .hover-translate-y:hover { transform: translateY(-10px); }
                .hover-shadow:hover { box-shadow: 0 10px 40px rgba(0,0,0,0.05); }
                .transition-all { transition: all 0.3s ease; }
            `}</style>
        </div>
    );
};

export default Pricing;

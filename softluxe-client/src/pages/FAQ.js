import React, { useState } from 'react';
import { Container, Accordion, Form, InputGroup, Row, Col, Badge, Card } from 'react-bootstrap';
import { FiSearch, FiHelpCircle, FiZap, FiLock, FiGlobe } from 'react-icons/fi';

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const faqData = [
        {
            category: 'General',
            icon: <FiHelpCircle />,
            items: [
                { q: "What is Softluxe?", a: "Softluxe is an all-in-one SaaS platform designed to streamline business operations through intelligent automation, integrated storage, and powerful developer tools." },
                { q: "How do I get started?", a: "You can get started by creating an account on our platform. Check out our 'Getting Started' guide in the documentation for a step-by-step walkthrough." },
                { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial for all our premium plans so you can explore the full features before committing." }
            ]
        },
        {
            category: 'Platform & Tech',
            icon: <FiZap />,
            items: [
                { q: "Which technologies do you support?", a: "Our SDKs are built for modern environments, supporting Node.js, React, Next.js, Python, and more. We offer native REST and GraphQL APIs." },
                { q: "Can I integrate my own storage?", a: "Softluxe comes with built-in encrypted storage, but our 'Enterprise' plan allows you to bring your own S3/Azure Blob storage buckets." },
                { q: "Are there any API limits?", a: "Limits vary by plan. The 'Pro' plan includes up to 100k requests per month, while 'Enterprise' offers custom high-throughput limits." }
            ]
        },
        {
            category: 'Security',
            icon: <FiLock />,
            items: [
                { q: "Is my data secure?", a: "Absolutely. We use AES-256 encryption at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II compliant." },
                { q: "Where is my data stored?", a: "By default, data is stored in AWS US-East-1. Enterprise customers can choose their preferred data residency regions." }
            ]
        }
    ];

    const filteredData = faqData.map(cat => ({
        ...cat,
        items: cat.items.filter(item => 
            item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="faq-page">
            {/* Hero Section */}
            <section className="text-center position-relative overflow-hidden bg-white" 
                style={{ paddingTop: '180px', paddingBottom: '80px' }}>
                <div className="position-absolute w-100 h-100" 
                    style={{ top: 0, left: 0, zIndex: 0, opacity: 0.4, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h1>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
                        Have questions? We're here to help. Find the answers you need or contact our support team.
                    </p>
                </Container>
            </section>

            {/* FAQ Sections */}
            <section className="py-5 bg-light" style={{ minHeight: '400px' }}>
                <Container>
                    {filteredData.length > 0 ? (
                        <Row className="justify-content-center">
                            <Col lg={9}>
                                {filteredData.map((cat, catIdx) => (
                                    <div key={catIdx} className="mb-5">
                                        <div className="d-flex align-items-center gap-3 mb-4 ps-2">
                                            <div className="bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                                {cat.icon}
                                            </div>
                                            <h4 className="fw-bold mb-0">{cat.category}</h4>
                                        </div>
                                        <Accordion className="softluxe-accordion">
                                            {cat.items.map((item, idx) => (
                                                <Accordion.Item eventKey={`${catIdx}-${idx}`} key={idx} className="border-0 mb-3 shadow-sm rounded-xl overflow-hidden">
                                                    <Accordion.Header className="fw-bold py-2">{item.q}</Accordion.Header>
                                                    <Accordion.Body className="text-muted" style={{ lineHeight: '1.7' }}>
                                                        {item.a}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    ) : (
                        <div className="text-center py-5">
                            <div className="mb-4 text-muted opacity-25">
                                <FiSearch size={64} />
                            </div>
                            <h4 className="fw-bold">No results found</h4>
                            <p className="text-muted">We couldn't find any questions matching "{searchTerm}". Try different keywords.</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-white border-top border-light">
                <Container className="text-center">
                    <Card className="border-0 p-5 rounded-3xl text-white shadow-lg" style={{ backgroundColor: '#8B5CF6', borderRadius: '40px' }}>
                        <h2 className="fw-bold mb-3 text-white">Still have questions?</h2>
                        <p className="mb-4 mx-auto opacity-75" style={{ maxWidth: '500px' }}>
                            If you cannot find the answer to your question in our FAQ, you can always contact us and we will answer you shortly.
                        </p>
                        <a href="/contact" className="btn btn-light rounded-pill px-5 py-3 fw-bold shadow-sm text-primary" style={{ border: 'none' }}>
                            Contact Support
                        </a>
                    </Card>
                </Container>
            </section>

            <style>{`
                .softluxe-accordion .accordion-button {
                    background-color: #fff;
                    color: #1F2937;
                    font-weight: 600;
                    padding: 1.5rem;
                    border: none;
                    box-shadow: none;
                }
                .softluxe-accordion .accordion-button:not(.collapsed) {
                    background-color: #fff;
                    color: #8B5CF6;
                }
                .softluxe-accordion .accordion-button:after {
                    filter: grayscale(1);
                    opacity: 0.5;
                }
                .rounded-xl { border-radius: 16px !important; }
                .shadow-sm { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03) !important; }
            `}</style>
        </div>
    );
};

export default FAQ;

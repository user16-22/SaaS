import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, InputGroup, Table } from 'react-bootstrap';
import { FiSearch, FiBook, FiCode, FiSettings, FiCheckCircle, FiCpu, FiShield, FiZap } from 'react-icons/fi';

const Docs = () => {
    const [activeSection, setActiveSection] = useState('Getting Started');

    const sections = [
        { title: 'Getting Started', icon: <FiBook /> },
        { title: 'Installation', icon: <FiCode /> },
        { title: 'Configuration', icon: <FiSettings /> },
        { title: 'API Reference', icon: <FiCpu /> },
        { title: 'Best Practices', icon: <FiZap /> }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'Installation':
                return (
                    <div className="animate-fade-in">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Installation</h2>
                        <p className="lead text-muted mb-4">Setting up Softluxe is quick and easy. We support all major package managers.</p>
                        
                        <div className="mb-5">
                            <h5 className="fw-bold mb-3">Using NPM</h5>
                            <div className="bg-dark rounded-xl p-3 text-white mb-3">
                                <code className="text-white">$ npm install @softluxe/client</code>
                            </div>
                            
                            <h5 className="fw-bold mb-3 mt-4">Using Yarn</h5>
                            <div className="bg-dark rounded-xl p-3 text-white">
                                <code className="text-white">$ yarn add @softluxe/client</code>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-light border border-primary border-opacity-25 d-flex gap-3 align-items-center">
                            <FiShield size={32} className="text-primary flex-shrink-0" />
                            <div>
                                <h6 className="fw-bold mb-1">Peer Dependencies</h6>
                                <p className="small text-muted mb-0">Ensure you have Node.js version 16 or higher installed in your environment.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'Configuration':
                return (
                    <div className="animate-fade-in">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Configuration</h2>
                        <p className="lead text-muted mb-4">Initialize the client with your credentials to start interacting with the API.</p>
                        
                        <div className="bg-dark rounded-xl p-4 text-white mb-4 shadow-lg">
                            <pre className="mb-0" style={{ color: '#E5E7EB' }}>
{`import { Softluxe } from '@softluxe/client';

const client = new Softluxe({
  apiKey: 'YOUR_API_KEY',
  environment: 'production',
  region: 'us-east-1'
});`}
                            </pre>
                        </div>
                        
                        <h4 className="fw-bold mb-4 mt-5">Available Options</h4>
                        <Table responsive hover className="border small">
                            <thead className="bg-light">
                                <tr>
                                    <th className="py-3 px-4">Parameter</th>
                                    <th className="py-3 px-4">Type</th>
                                    <th className="py-3 px-4">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3 fw-bold">apiKey</td>
                                    <td className="px-4 py-3"><code>string</code></td>
                                    <td className="px-4 py-3 text-muted">Your project secret key from dashboard.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 fw-bold">environment</td>
                                    <td className="px-4 py-3"><code>enum</code></td>
                                    <td className="px-4 py-3 text-muted">Either 'sandbox' or 'production'.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                );
            case 'API Reference':
                return (
                    <div className="animate-fade-in">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>API Reference</h2>
                        <p className="lead text-muted mb-4">A complete list of methods available in the Softluxe SDK.</p>
                        
                        {[
                            { method: 'client.users.create()', desc: 'Create a new user profile in your project.' },
                            { method: 'client.verify.token()', desc: 'Validate an incoming JWT from a client.' },
                            { method: 'client.storage.upload()', desc: 'Securely upload files to the encrypted cloud.' }
                        ].map((api, i) => (
                            <div key={i} className="mb-4 p-4 border rounded-xl hover-shadow transition-all">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h5 className="fw-bold mb-0 text-primary"><code>{api.method}</code></h5>
                                    <span className="badge bg-light text-primary rounded-pill">POST</span>
                                </div>
                                <p className="text-muted mb-0">{api.desc}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'Best Practices':
                return (
                    <div className="animate-fade-in">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Best Practices</h2>
                        <p className="lead text-muted mb-4">Optimize your implementation for scale and security.</p>
                        
                        <div className="row g-4">
                            {[
                                { title: 'Use Environment Variables', desc: 'Never hardcode your API keys in the source code. Always use .env files.' },
                                { title: 'Implement Error Handling', desc: 'Wrap API calls in try-catch blocks to handle network issues gracefully.' },
                                { title: 'Caching Strategies', desc: 'Cache frequently accessed data locally to reduce latency and API costs.' },
                                { title: 'Batch Processing', desc: 'Use batch methods when processing more than 50 records at once.' }
                            ].map((item, i) => (
                                <Col md={6} key={i}>
                                    <div className="p-4 bg-light rounded-xl h-100">
                                        <FiCheckCircle className="text-primary mb-3" size={24} />
                                        <h6 className="fw-bold">{item.title}</h6>
                                        <p className="small text-muted mb-0">{item.desc}</p>
                                    </div>
                                </Col>
                            ))}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="animate-fade-in">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Getting Started</h2>
                        <p className="lead text-muted mb-4">Welcome to the developer portal for Softluxe! Our platform provides a powerful suite of tools designed to streamline your business operations through intelligent software.</p>
                        
                        <div className="p-4 rounded-xl border border-light shadow-sm mb-5 bg-light-purple">
                            <h4 className="fw-bold mb-3 d-flex align-items-center gap-2">
                                <FiCode className="text-primary" /> Core Installation
                            </h4>
                            <p className="small text-muted mb-4">Run the following command in your terminal to get started with the official client library.</p>
                            
                            <div className="bg-dark rounded-xl p-3 position-relative overflow-hidden">
                                <code className="text-white">$ npm install @softluxe/client --save</code>
                            </div>
                        </div>

                        <h3 className="fw-bold mb-4 mt-5">Next Steps</h3>
                        <Row className="g-4">
                            <Col md={6}>
                                <div className="border rounded-xl p-4 h-100 hover-shadow transition-all pointer" onClick={() => setActiveSection('Configuration')}>
                                    <h6 className="fw-bold mb-2">Configuration Guide</h6>
                                    <p className="small text-muted mb-0">Learn how to setup your environment keys.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="border rounded-xl p-4 h-100 hover-shadow transition-all pointer" onClick={() => setActiveSection('API Reference')}>
                                    <h6 className="fw-bold mb-2">Explore API</h6>
                                    <p className="small text-muted mb-0">Browse the full list of SDK methods.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                );
        }
    };

    return (
        <div className="docs-page">
            {/* Header / Hero Section */}
            <section className="text-center position-relative overflow-hidden" 
                style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', paddingTop: '180px', paddingBottom: '60px' }}>
                <div className="position-absolute w-100 h-100" 
                    style={{ top: 0, left: 0, zIndex: 0, opacity: 0.4, backgroundImage: 'url("/images/about/hero-bg-spots.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <Container className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>
                        Knowledge <span className="text-primary">Center</span>
                    </h1>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                        Explore our comprehensive guides, API references, and best practices to master the Softluxe platform.
                    </p>
                    
                    <div className="mt-4 mx-auto" style={{ maxWidth: '450px' }}>
                        <InputGroup className="bg-white rounded-pill shadow-sm border p-1">
                            <InputGroup.Text className="bg-transparent border-0 ps-3">
                                <FiSearch className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control placeholder="Search documentation..." className="border-0 shadow-none px-2" style={{ height: '48px' }} />
                        </InputGroup>
                    </div>
                </Container>
            </section>

            {/* Main Docs Content */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="g-5">
                        <Col lg={4}>
                            <div className="sticky-top" style={{ top: '100px' }}>
                                <h5 className="fw-bold mb-4 ps-2">Documentation</h5>
                                <ListGroup className="list-group-docs border-0">
                                    {sections.map((item, idx) => (
                                        <ListGroup.Item 
                                            key={idx} 
                                            action 
                                            active={activeSection === item.title} 
                                            onClick={() => setActiveSection(item.title)}
                                            className="border-0 rounded-xl mb-2 px-3 py-3 d-flex align-items-center gap-3 transition-all"
                                            style={{
                                                backgroundColor: activeSection === item.title ? '#8B5CF6' : 'transparent',
                                                color: activeSection === item.title ? 'white' : '#4B5563'
                                            }}
                                        >
                                            <span style={{ color: activeSection === item.title ? 'white' : '#8B5CF6' }}>{item.icon}</span>
                                            <span className="fw-medium">{item.title}</span>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg={8}>
                            <div className="docs-content pe-lg-5 min-vh-50">
                                {renderContent()}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <style>{`
                .bg-light-purple { background-color: #F8F7FF; }
                .hover-shadow:hover { box-shadow: 0 10px 25px rgba(139, 92, 246, 0.1); transform: translateY(-3px); border-color: rgba(139, 92, 246, 0.3) !important; }
                .pointer { cursor: pointer; }
                .transition-all { transition: all 0.2s ease; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fadeIn 0.4s ease forwards; }
                code { background: rgba(139, 92, 246, 0.1); color: #8B5CF6; padding: 0.2rem 0.4rem; border-radius: 4px; }
            `}</style>
        </div>
    );
};

export default Docs;

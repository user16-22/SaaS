import React from 'react';
import { Card, ListGroup, Badge, Spinner } from 'react-bootstrap';
import { FiClock } from 'react-icons/fi';

const MessageList = ({ messages, loading, selectedMsg, onSelect }) => {
    return (
        <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
            <Card.Header className="bg-white py-3 border-0 text-center">
                <h5 className="mb-0 fw-bold">Inquiries</h5>
            </Card.Header>
            <ListGroup variant="flush">
                {loading ? (
                    <div className="p-5 text-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : messages.length === 0 ? (
                    <div className="p-5 text-center text-muted">No messages yet.</div>
                ) : (
                    messages.map((msg) => (
                        <ListGroup.Item
                            key={msg._id}
                            action
                            active={selectedMsg?._id === msg._id}
                            onClick={() => onSelect(msg)}
                            className="py-3 border-0"
                        >
                            <div className="d-flex justify-content-between align-items-start mb-1">
                                <span className="fw-bold text-truncate" style={{ maxWidth: '150px' }}>{msg.name}</span>
                                <Badge bg={msg.status === 'replied' ? 'success' : 'primary'} pill>
                                    {msg.status}
                                </Badge>
                            </div>
                            <div className="small text-muted text-truncate">{msg.subject || 'No Subject'}</div>
                            <div className="small text-muted mt-1 opacity-50">
                                <FiClock className="me-1" size={12} /> {new Date(msg.createdAt).toLocaleDateString()}
                            </div>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </Card>
    );
};

export default MessageList;

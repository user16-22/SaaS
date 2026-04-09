import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FiMail, FiMessageSquare, FiClock, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

const MessageDetail = ({ message, onReply, onDelete }) => {
    if (!message) {
        return (
            <Card className="border-0 shadow-sm rounded-xl p-5 text-center text-muted h-100 d-flex flex-column justify-content-center border">
                <FiMail size={64} className="mx-auto mb-4 opacity-10" />
                <h4>Select a message to view details</h4>
                <p>All contact inquiries from your website will appear here.</p>
            </Card>
        );
    }

    return (
        <Card className="border-0 shadow-sm rounded-xl p-4 p-lg-5 animate-in">
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                <div>
                    <h3 className="fw-bold mb-1">{message.subject || 'New Inquiry'}</h3>
                    <div className="text-muted small">
                        <FiClock className="me-1" /> Received on {new Date(message.createdAt).toLocaleString()}
                    </div>
                </div>
                <Badge bg={message.status === 'replied' ? 'success' : 'primary'} className="p-2 px-3">
                    {message.status.toUpperCase()}
                </Badge>
            </div>

            <div className="bg-light rounded-xl p-4 mb-4 border">
                <div className="d-flex align-items-center mb-3">
                    <div className="bg-white rounded-circle p-3 me-3 shadow-sm text-primary">
                        <FiMail size={24} />
                    </div>
                    <div>
                        <div className="fw-bold fs-5">{message.name}</div>
                        <div className="text-muted small d-flex align-items-center">
                            {message.email}
                            <Button
                                variant="link"
                                size="sm"
                                className="p-0 ms-2 text-decoration-none"
                                style={{ color: '#8B5CF6' }}
                                onClick={() => navigator.clipboard.writeText(message.email).then(() => alert('Email copied!'))}
                            >
                                Copy
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border-start border-4 border-primary shadow-sm mt-4">
                    <div className="text-muted small fw-bold mb-2 text-uppercase" style={{ letterSpacing: '1px' }}>Message Details</div>
                    <p className="mb-0 text-dark fs-6" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{message.message}</p>
                </div>
            </div>

            {message.status === 'replied' && (
                <div className="bg-success-subtle border border-success border-opacity-25 rounded-xl p-4 mb-4">
                    <div className="d-flex align-items-center mb-2 text-success fw-bold">
                        <FiCheckCircle className="me-2" /> Official Administrator Response
                    </div>
                    <p className="mb-0 text-dark opacity-75">{message.reply}</p>
                    <div className="text-muted small mt-2">Sent on {new Date(message.repliedAt).toLocaleString()}</div>
                </div>
            )}

            <div className="d-flex gap-3 mt-4">
                <Button
                    className="btn-primary rounded-pill px-5 py-3 fw-bold flex-grow-1 shadow-sm"
                    onClick={onReply}
                >
                    <FiMessageSquare className="me-2" />
                    {message.status === 'replied' ? 'Reply Again' : 'Send Response'}
                </Button>
                <Button
                    variant="outline-danger"
                    className="rounded-pill px-4"
                    onClick={() => onDelete(message._id)}
                >
                    <FiTrash2 />
                </Button>
            </div>
        </Card>
    );
};

export default MessageDetail;

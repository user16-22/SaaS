import React from 'react';
import { Modal, Form, Button, Spinner } from 'react-bootstrap';
import { FiSend } from 'react-icons/fi';

const ReplyModal = ({ show, onHide, message, content, setContent, onSubmit, loading }) => {
    return (
        <Modal show={show} onHide={onHide} centered size="lg" className="rounded-xl">
            <Modal.Header closeButton className="border-0 p-4 pb-0">
                <Modal.Title className="fw-bold">Reply to {message?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4 pt-4">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Label className="fw-bold text-muted small text-uppercase">Message Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="Write your response here..."
                            className="rounded-xl p-3 border shadow-none"
                            style={{ backgroundColor: '#fcfcfc', borderRadius: '15px' }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button
                        className="btn-primary rounded-pill px-5 py-3 fw-bold w-100 shadow"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spinner size="sm" className="me-2" /> Sending...
                            </>
                        ) : (
                            <>
                                <FiSend className="me-2" /> Send Reply via Gmail
                            </>
                        )}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ReplyModal;

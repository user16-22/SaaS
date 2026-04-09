import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiRefreshCw } from 'react-icons/fi';
import * as api from './services/api';

// Components
import MessageList from './components/MessageList';
import MessageDetail from './components/MessageDetail';
import ReplyModal from './components/ReplyModal';

function App() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMsg, setSelectedMsg] = useState(null);
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [sendingReply, setSendingReply] = useState(false);

    const handleFetchMessages = async () => {
        setLoading(true);
        try {
            const data = await api.fetchMessages();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleFetchMessages();
    }, []);

    const handleReplySubmit = async (e) => {
        e.preventDefault();
        if (!replyContent || !selectedMsg) return;

        setSendingReply(true);
        try {
            await api.sendReply(selectedMsg._id, replyContent);
            alert('Reply sent successfully via Gmail!');
            setShowReplyModal(false);
            setReplyContent('');
            handleFetchMessages();
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Failed to send reply.');
        }
        setSendingReply(false);
    };

    const handleDeleteMessage = async (id) => {
        if (!window.confirm('Delete this message permanently?')) return;
        try {
            await api.deleteMessage(id);
            setSelectedMsg(null);
            handleFetchMessages();
        } catch (error) {
            alert('Delete failed');
        }
    };

    return (
        <div className="bg-light min-vh-100 py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h1 className="fw-bold mb-1" style={{ letterSpacing: '-1px' }}>
                            Softluxe <span style={{ color: '#8B5CF6' }}>Dashboard</span>
                        </h1>
                        <p className="text-muted">Manage your business inquiries and contact messages.</p>
                    </div>
                    <Button variant="outline-primary" className="rounded-pill px-4" onClick={handleFetchMessages} disabled={loading}>
                        <FiRefreshCw className={`me-2 ${loading ? 'spin' : ''}`} />
                        Refresh
                    </Button>
                </div>

                <Row>
                    <Col lg={4}>
                        <MessageList
                            messages={messages}
                            loading={loading}
                            selectedMsg={selectedMsg}
                            onSelect={setSelectedMsg}
                        />
                    </Col>

                    <Col lg={8}>
                        <MessageDetail
                            message={selectedMsg}
                            onReply={() => setShowReplyModal(true)}
                            onDelete={handleDeleteMessage}
                        />
                    </Col>
                </Row>
            </Container>

            <ReplyModal
                show={showReplyModal}
                onHide={() => setShowReplyModal(false)}
                message={selectedMsg}
                content={replyContent}
                setContent={setReplyContent}
                onSubmit={handleReplySubmit}
                loading={sendingReply}
            />

            <style>{`
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .list-group-item.active {
          background-color: #8B5CF6 !important;
          border-color: #8B5CF6 !important;
        }
        .rounded-xl {
          border-radius: 1.5rem !important;
        }
        .btn-primary {
          background-color: #8B5CF6;
          border-color: #8B5CF6;
        }
        .btn-primary:hover {
          background-color: #7C3AED;
          border-color: #7C3AED;
        }
        .animate-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}

export default App;

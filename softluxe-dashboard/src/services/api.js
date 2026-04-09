import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const fetchMessages = async () => {
    const response = await axios.get(`${API_BASE_URL}/contact`);
    return response.data;
};

export const sendReply = async (id, replyContent) => {
    const response = await axios.post(`${API_BASE_URL}/contact/reply`, {
        id,
        replyContent
    });
    return response.data;
};

export const deleteMessage = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/contact/${id}`);
    return response.data;
};

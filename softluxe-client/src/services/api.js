import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
});

export const fetchHomeData = () => API.get('/pages/home');
export const fetchAboutData = () => API.get('/pages/about');
export const fetchServices = () => API.get('/pages/services');
export const fetchPricing = () => API.get('/pages/pricing');
export const fetchTeam = () => API.get('/pages/team');
export const fetchFAQ = () => API.get('/pages/faq');
export const fetchBlogs = () => API.get('/pages/blog');
export const fetchBlogDetail = (slug) => API.get(`/pages/blog/${slug}`);
export const submitContact = (data) => API.post('/contact', data);

export default API;

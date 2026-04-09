const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const Team = require('./models/Team');
const Pricing = require('./models/Pricing');
const FAQ = require('./models/FAQ');
const Blog = require('./models/Blog');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/softluxe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected for Seeding');
    seedData();
}).catch(err => console.log(err));

const seedData = async () => {
    try {
        await Service.deleteMany({});
        await Team.deleteMany({});
        await Pricing.deleteMany({});
        await FAQ.deleteMany({});
        await Blog.deleteMany({});

        await Service.insertMany([
            {
                title: 'Custom Software Development',
                description: 'Tailored software solutions to meet your specific business needs.',
                icon: 'BiCodeAlt',
                details: 'We build robust, scalable, and secure software applications using the latest technologies.'
            },
            {
                title: 'SaaS Application Development',
                description: 'Scalable cloud-based applications accessible from anywhere.',
                icon: 'BiCloud',
                details: 'Launch your SaaS product with our expert development services, including multi-tenancy and subscription management.'
            },
            {
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile apps for iOS and Android.',
                icon: 'BiMobile',
                details: 'Engage your users on the go with high-performance mobile applications.'
            }
        ]);

        await Pricing.insertMany([
            {
                planName: 'Basic',
                price: '49',
                features: ['5 Projects', 'Basic Analytics', 'Email Support'],
                isRecommended: false
            },
            {
                planName: 'Pro',
                price: '99',
                features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Access to APIs'],
                isRecommended: true
            },
            {
                planName: 'Enterprise',
                price: '199',
                features: ['Custom Solutions', 'Dedicated Manager', '24/7 Support', 'On-premise Deployment'],
                isRecommended: false
            }
        ]);

        await Team.insertMany([
            {
                name: 'Sarah Jenkins',
                role: 'CEO & Founder',
                photo: 'https://randomuser.me/api/portraits/women/44.jpg',
                socialLinks: { linkedin: '#', twitter: '#' }
            },
            {
                name: 'David Lee',
                role: 'CTO',
                photo: 'https://randomuser.me/api/portraits/men/32.jpg',
                socialLinks: { linkedin: '#', github: '#' }
            },
            {
                name: 'Emily Chen',
                role: 'Lead Designer',
                photo: 'https://randomuser.me/api/portraits/women/65.jpg',
                socialLinks: { linkedin: '#', website: '#' }
            }
        ]);

        await FAQ.insertMany([
            {
                question: 'What is your typical project timeline?',
                answer: 'Timelines vary depending on complexity, but a typical MVP takes 8-12 weeks.'
            },
            {
                question: 'Do you offer post-launch support?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your software keeps running smoothly.'
            }
        ]);

        await Blog.insertMany([
            {
                title: 'The Future of SaaS in 2024',
                slug: 'future-of-saas-2024',
                summary: 'Trends and predictions for the SaaS industry in the coming year.',
                body: 'Full content of the blog post...',
                author: 'David Lee',
                featuredImage: 'https://via.placeholder.com/800x400'
            },
            {
                title: 'Why React is Great for Enterprise',
                slug: 'react-for-enterprise',
                summary: 'Exploring the benefits of React.js for large-scale applications.',
                body: 'Full content of the blog post...',
                author: 'Sarah Jenkins',
                featuredImage: 'https://via.placeholder.com/800x400'
            }
        ]);

        console.log('Data Seeded Successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

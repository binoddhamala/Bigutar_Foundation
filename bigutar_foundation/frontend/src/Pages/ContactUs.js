// React Component
// File: src/components/ContactUs.js

import React, { useState } from 'react';
import '../Styles/Contact.css';
import Layout from '../Components/Layout/Layout';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Layout>
    <div className="contact-container1">
      <div className="contact-info">
        <h2>Contact Us</h2>
        
        <p><strong>Location:</strong> 123 Main Street, Kathmandu, Nepal</p>
        <p><strong>Phone:</strong> +977-1234567890</p>
        <p><strong>Email:</strong> contact@example.com</p>
      </div>
      <div className="contact-form">
        <h2>Leave Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;

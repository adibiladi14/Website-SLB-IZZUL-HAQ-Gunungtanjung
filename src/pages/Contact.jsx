// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Contact.css';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <div className="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to learn more about SLB Negeri Tasikmalaya, please fill out the form below and we will get back to you as soon as possible.</p>
    <ContactForm />
  </div>
);

export default Contact;

import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Toast from './Toast';
import '../styles/Contacts.css';

import emailjs from '@emailjs/browser';

// ...

function Contacts() {
  const divs = useRef([]);
  const scrollTab = useRef();
  const formRef = useRef(); // Add ref for form
  useScrollAnimation(scrollTab, divs);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with your actual EmailJS credentials
    // You can get these from https://dashboard.emailjs.com/admin
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Tra Hoang Trong', // Your name
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        setToast({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error("EmailJS Error:", error);
        if (error.status === 412) {
          setToast({ message: 'Config Error: Reconnect Gmail in EmailJS Dashboard.', type: 'error' });
        } else {
          setToast({ message: 'Failed to send message. Please try again.', type: 'error' });
        }
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <section className='contacts' ref={scrollTab} id='contacts'>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="title" ref={(el) => (divs.current[0] = el)}>
        Get In Touch
      </div>
      <div className="des" ref={(el) => (divs.current[1] = el)}>
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info" ref={(el) => (divs.current[2] = el)}>
          <h3>Contact Information</h3>
          <p>Fill up the form and I will get back to you within 24 hours.</p>

          <div className="info-item">
            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="text">
              <span>Phone</span>
              <p>+84 842 366 570</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="text">
              <span>Email</span>
              <p>trahoangdev@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
            <div className="text">
              <span>Location</span>
              <p>Vietnam</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="contact-form" onSubmit={handleSubmit} ref={(el) => (divs.current[3] = el)}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="What can I help you with?"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'} <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contacts

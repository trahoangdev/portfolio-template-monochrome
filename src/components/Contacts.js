import React, { useState, useRef, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Toast from './Toast';
import styles from '../styles/Contacts.module.css';
import { config } from '../data/config';
import env from '../config/env';
import emailjs from '@emailjs/browser';

const Contacts = forwardRef((props, ref) => {
  const divs = useRef([]);
  useScrollAnimation(ref, divs);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSending(true);

    const SERVICE_ID = env.emailjs.serviceId;
    const TEMPLATE_ID = env.emailjs.templateId;
    const PUBLIC_KEY = env.emailjs.publicKey;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: config.name,
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
    <section className={styles.contacts} ref={ref} id='contacts'>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className={styles.title} ref={(el) => (divs.current[0] = el)}>
        Get In Touch
      </div>
      <div className={styles.sectionDes} ref={(el) => (divs.current[1] = el)}>
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </div>

      <div className={styles.container}>
        {/* Left Side: Contact Info */}
        <div className={styles.info} ref={(el) => (divs.current[2] = el)}>
          <h3>Contact Information</h3>
          <p>Fill up the form and I will get back to you within 24 hours.</p>

          <div className={styles.item}>
            <div className={styles.icon}><FontAwesomeIcon icon={faPhone} /></div>
            <div className={styles.text}>
              <span>Phone</span>
              <p>{config.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className={styles.text}>
              <span>Email</span>
              <p>{config.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
            <div className={styles.text}>
              <span>Location</span>
              <p>{config.location}</p>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href={config.socials.github} className={styles.socialIcon} aria-label="Github"><FontAwesomeIcon icon={faGithub} /></a>
            <a href={config.socials.linkedin} className={styles.socialIcon} aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={config.socials.instagram} className={styles.socialIcon} aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className={styles.form} onSubmit={handleSubmit} ref={(el) => (divs.current[3] = el)}>
          <div className={styles.formGroup}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ''}
              required
              placeholder="John Doe"
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
              required
              placeholder="john@example.com"
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.errorInput : ''}
              required
              placeholder="What can I help you with?"
            ></textarea>
            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.button} disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'} <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </section>
  )
})
export default Contacts

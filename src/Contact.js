import React from 'react';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      detail: 'nihaal.warraich@gmail.com',
      link: 'mailto:nihaal.warraich@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      detail: '+1 (973) 885-7566',
      link: 'tel:+19738857566',
      icon: '📱'
    },
    {
      title: 'Location',
      detail: 'Newark, NJ',
      link: null,
      icon: '📍'
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              {info.link ? (
                <span><strong>{info.title}:</strong> <a href={info.link} className="contact-value">{info.detail}</a></span>
              ) : (
                <span><strong>{info.title}:</strong> <span className="contact-value">{info.detail}</span></span>
              )}
            </div>
          ))}
          
          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/Nihaal-Warraich" className="social-link github">
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/nihaal-warraich-948932245" className="social-link linkedin">
                <span className="social-icon">💼</span> LinkedIn
              </a>
              <a href="google.com" className="social-link twitter">
                <span className="social-icon">🐦</span> Twitter
              </a>
              <a href="google.com" className="social-link instagram">
                <span className="social-icon">📸</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
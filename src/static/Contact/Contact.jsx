import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h3>For more information about me</h3>
      <p>You can download my CV below:</p>
      
      <div className="cv-download">
        <a href="/Halimat_Jinad_CV.pdf" download>
          Download My CV
        </a>
      </div>
      <div className="contact-info">
            <p>Phone: +2348106363910</p>
            <p>Email: <a href="mailto:halimatabiodunjinad@gmail.com">halimatabiodunjinad@gmail.com</a></p>
          </div>

          
          <div className="social-icons">
            <a href="https://github.com/Hamzyczin" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/halimat-abiodun" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/HalimatJinad?t=Y1Z7knGyICIvdwx1d3NO4A&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
      
    </section>
  );
};

export default Contact;

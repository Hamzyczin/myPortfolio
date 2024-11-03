import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import myImage from "../../assets/my pix.jpg"
import './Header.css'

const Header = () => {
  return (
 <div className='split'>
     <header className="header">
      <h1>Jinad Halimat Abiodun</h1>
      <p>Passionate about crafting innovative solutions through code. 💻</p>
      <a href="#contact" className="contact-button">Contact Me</a>
      <div className="contact-info">
      <p>Phone: +2348106363910</p>
      <p>Email: <a href="mailto:halimatabiodunjinad@gmail.com">halimatabiodunjinad@gmail.com</a></p>
    </div>

      <div className="social-icons">
        <a href="https://github.com/Hamzyczin" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/halimat-abiodun" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/HalimatJinad?t=cjOXlV6Od054OscWfJ0Ujg&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div className='myimg'>
        {<img src={myImage} alt="" /> }
      </div>
    </header> 
 </div>
  );
};


export default Header;
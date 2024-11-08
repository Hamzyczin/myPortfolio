import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import myImage from "../../assets/myProfPic.jpg";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        
        <div className="myimg">
          <img src={myImage} alt="Jinad Halimat Abiodun" />
        </div>

        <div className="header-info">
          <h1>Jinad Halimat Abiodun</h1>
          <p>A Front-end developer Passionate about crafting innovative solutions through code  <br/> and accessible user friendly web application. 💻</p>
          <a href="#contact" className="contact-button">Contact me </a>

          
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
        </div>
      </div>
    </div>
  );
};

export default Header;

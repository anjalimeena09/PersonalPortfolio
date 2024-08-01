import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <div className="footermain">
      <div className="social-icon">
        <a href="https://linkedin.com/in/anjali-meena" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/anjalimeena09" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100082081375288&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/anjali.meena09?igsh=MWozZmVkMWZ6ZXltcw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://x.com/anjalimeena09?t=hb3DVjMcs7GjlkhnyiMjOQ&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
      </div>
      <p className='footpara'>© 2024 Anjali Meena. All rights reserved.</p>
    </div>
  );
};

export default FooterComponent;




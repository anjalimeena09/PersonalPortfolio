import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
// import contact from '../../assets/contact.png';
import './contact.css';

const ContactComponent = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className='contacthead'>Contact Me</h1>
      <div className='contpara'>
        <p>Please do not hesitate to send us a message if you have any questions.</p>
      </div>
      <div className="contact-details">
        <a href="mailto:anjalimeena09052003@gmail.com">
          <p><FaEnvelope className='contact-icon' /> anjalimeena09052003@gmail.com</p>
        </a>
        <a href="tel:+918306216084">
          <p><FaPhone className="contact-icon" /> 8306216084</p>
        </a>
        <p><FaMapMarkerAlt className="contact-icon" /> Jaipur, Rajasthan</p>
      {/* <div className='rightimg'>
        <img src={contact} alt="Anjali Meena" />
      </div> */}
      </div>
    </div>
  );
};

export default ContactComponent;




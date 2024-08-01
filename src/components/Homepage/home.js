import React from 'react';
import './home.css';
import myphoto from '../../assets/myphoto.jpg';
import { PiLinkedinLogoBold } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { IoMdDownload } from "react-icons/io";
// import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const HomeComponent = () => {
  return (
    <div id="home" className='homemaindiv'>
      <div className='homesecdiv'>
        <div className='leftdiv'>
          <div className='leftinner'>
            <span className='lefth'>Hi, I'm </span>
            <span className="highlight bold">Anjali Meena</span>
          </div>
          <span className='brif'>"Passionate Software Engineer."</span>
          <div className="button-container">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="/Anjali_ Resume.pdf" download="Anjali_ Resume.pdf" className="btn btn-download">
              Download CV
              <IoMdDownload size={20} className="icon-download" />
            </a>
          </div>
          <div className="social-icons">
            <div className='aval'>Available on: </div>
            <a className='githubicon' href="https://github.com/anjalimeena09" target="_blank" rel="noopener noreferrer">
              <VscGithub size={30} />
            </a>
            <a className='linkdinicon' href="https://mailto:anjalimeena09052003@gmail.com" target="_blank" rel="noopener noreferrer">
              <PiLinkedinLogoBold size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082081375288&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/anjali.meena09?igsh=MWozZmVkMWZ6ZXltcw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://x.com/anjalimeena09?t=hb3DVjMcs7GjlkhnyiMjOQ&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
            {/* <a className='emailicon' href="mailto:anjalimeena09052003@gmail.com" target="_blank" rel="noopener noreferrer">
              <BiLogoGmail size={30} />
            </a> */}
            
        
          </div>
        </div>
      </div>
      <div className='rightdiv'>
        <img src={myphoto} alt="Anjali Meena" />
      </div>
    </div>
  );
}

export default HomeComponent;





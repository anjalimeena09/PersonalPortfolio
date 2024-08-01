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





// import React from 'react';
// import './home.css';
// import myphoto from '../../assets/myphoto.jpg';
// import { PiLinkedinLogoBold } from "react-icons/pi";
// import { VscGithub } from "react-icons/vsc";
// import { IoMdDownload } from "react-icons/io";
// import { FaDownLong } from 'react-icons/fa6';

// const HomeComponent = () => {
//   const handleDownloadResume = () => {
//     const resumeUrl = 'Anjali_Resume.pdf';
//     FaDownLong(resumeUrl);
//   };

//   return (
//     <div className='homemaindiv'>
//       <div className='homesecdiv'>
//         <div className='leftdiv'>
//           <div className='leftinner'>
//             <span className='lefth'>Hi, I'm </span>
//             <span className="highlight bold">Anjali Meena</span>
//           </div>
//           <span className='brif'>"Passionate Software Engineer."</span>
//           <div className="button-container">
//             <button>Hire Me</button>
//             <button onClick={handleDownloadResume} className="btn-download">
//               Download CV
//               <IoMdDownload size={25} className="icon-download" />
//             </button>
//             </div>
//             <div className="social-icons">
//               <div className='aval'>Available on: </div>
//               <a className='githubicon' href="https://github.com/anjalimeena09" target="_blank" rel="noopener noreferrer">
//                 <VscGithub size={30} />
//               </a>
//               <a className='linkdinicon' href="https://linkedin.com/in/anjali-meena" target="_blank" rel="noopener noreferrer">
//                 <PiLinkedinLogoBold size={30} />
//               </a>
//           </div>
//         </div>
//       </div>
//       <div className='rightdiv'>
//         <img src={myphoto} alt="Anjali Meena" />
//       </div>
//     </div>
//   );
// }

// export default HomeComponent;





// import React from 'react';
// import './home.css';
// import myphoto from '../../assets/myphoto.jpg';
// import { BsGithub, BsLinkedin } from 'react-icons/bs'; // Example import for Bootstrap Icons
// import { AiOutlineDownload } from 'react-icons/ai'; // Import for download icon

// const HomeComponent = () => {
//   const handleDownloadResume = () => {
//     // Replace with the actual path to your resume file
//     const resumeUrl = '/path/to/your/Anjali';
//     window.open(resumeUrl, '_blank');
//   };

//   return (
//     <div className='homemaindiv'>
//       <div className='homesecdiv'>
//         <h1>Hi, I'm <span className="highlight">Anjali Meena</span></h1>
//         <span>Software Development Engineer.</span>
//         <div className="button-container">
//           <button>Hire Me</button>
//           <button onClick={handleDownloadResume} className="btn-download">
//             <AiOutlineDownload size={20} className="icon-download" />
//             Download CV
//           </button>
//           <div className="social-icons">
//             <a href="https://github.com/anjalimeena09" target="_blank" rel="noopener noreferrer">
//               <BsGithub size={30} />
//             </a>
//             <a href="https://linkedin.com/in/anjali-meena" target="_blank" rel="noopener noreferrer">
//               <BsLinkedin size={30} />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div>
//         <img src={myphoto} alt="Anjali Meena" />
//       </div>
//     </div>
//   );
// }

// export default HomeComponent;



// import React from 'react';
// import './home.css';
// import myphoto from '../../assets/myphoto.jpg';
// import { BsGithub, BsLinkedin } from 'react-icons/bs'; // Example import for Bootstrap Icons

// const HomeComponent = () => {
//   return (
//     <div className='homemaindiv'>
//       <div className='homesecdiv'>
//         <h1>Hi, I'm <span className="highlight">Anjali Meena</span></h1>
//         <span>Software Development Engineer.</span>
//         <div className="button-container">
//           <button>Hire Me</button>
//           <button>Download CV</button>
//           <div className="social-icons">
//             <a href="https://github.com/anjalimeena09" target="_blank" rel="noopener noreferrer">
//               <BsGithub size={30} />
//             </a>
//             <a href="https://linkedin.com/in/anjali-meena" target="_blank" rel="noopener noreferrer">
//               <BsLinkedin size={30} />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div>
//         <img src={myphoto} alt="Anjali Meena" />
//       </div>
//     </div>
//   );
// }

// export default HomeComponent;







// import React from 'react';
// import './home.css';
// import myphoto from '../../assets/myphoto.jpg'; 

// const HomeComponent = () => {
//   return (
//     <div className="home-component">
//       <div>
//         <h1>Hi, I'm <span className="highlight">Anjali Meena</span></h1>
//         <span>Software Development Engineer.</span>
//       </div>
//       <div>
//         <img src={myphoto} alt="Anjali Meena" />
//       </div>
//     </div>
//   );
// }

// export default HomeComponent;







// import React from 'react';
// import './home.css';
// import myphoto from './components/assets/myphoto.png';

// const HomeComponent = (props) => {
//   return (
//     <div>
//     <div>
//       <h1>Hi, I'm <span className="highlight">Anjali Meena</span></h1> 
//       <span>Software Development Engineer.</span>
//     </div>
//     <div>
//     <img src={myphoto} alt="Anjali Meena" />
//     </div>
//     </div>
//   );
// }

// export default HomeComponent;






// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> SOUMYAJIT BEHERA</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;
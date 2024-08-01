import React from 'react';
import './App.css'; // Import your CSS file for styling
import Navbar from './components/Navbar';
import HomeComponent from './components/Homepage/home';
import AboutComponent from './components/Aboutpage/about';
import SkillsComponent from './components/Skillspage/skills';
import ProComponent from './components/Projectspage/projects';
import ContactComponent from './components/Contactpage/contact';
import FooterComponent from './components/Footer/footer';



function App() {
  return (
    <>
      <Navbar/>
      <HomeComponent/>
      <AboutComponent/>
      <SkillsComponent/>
      <ProComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </>
  );
}

export default App;







// import React from 'react';
// import './App.css'; // Import your CSS file for styling
// import HomeComponent from './components/Homepage/home';



// function App() {
//   return (
//     <div>
//       <div className='navbar'>
//         <div className='navhead'>
//           <div className='head'>
//             <h1 className='header'>Anjali</h1>
//           </div>
//           <ul className='nav-list'>
//             <li className='nav-item'>Home</li>
//             <li className='nav-item'>About</li>
//             <li className='nav-item'>Skills</li>
//             <li className='nav-item'>Projects</li>
//             <li className='nav-item'>Contact</li>
//           </ul>
//         </div>
//       </div>
//       <HomeComponent></HomeComponent>
//     </div>
//   );
// }

// export default App;







// import React from 'react';
// import './App.css'; // Import your CSS file for styling



// function App() {
//   return (
//     <div>
//       <div className='navbar'>
//         <div className='navhead'>
//           <div className='head'>
//             <h1 className='header'>Anjali</h1>
//           </div>
//           <ul className='nav-list'>
//             <li className='nav-item'>Home</li>
//             <li className='nav-item'>About</li>
//             <li className='nav-item'>Skills</li>
//             <li className='nav-item'>Projects</li>
//             <li className='nav-item'>Contact</li>
//           </ul>
//         </div>
//       </div>
//       {/* Main content area based on routes */}
//     </div>
//   );
// }

// export default App;
























// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
// import About from './components/About/about';
// import Project from './components/Project/project';
// import Contact from './components/Contact/contact';







// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="*" element={<Navigate to="/"/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import './App.css';




// function App() {
//   return (
//     <div className="App">
      
     
//     </div>
//   );
// }

// export default App;






// import './App.css';

// function App() {
//   return (
//     <>
   
//     </>
//   );
// }

// export default App;

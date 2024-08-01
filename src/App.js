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





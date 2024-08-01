import React, { useEffect, useRef } from 'react';
import './about.css';
import aboutimg from '../../assets/aboutimg.jpg';

const AboutComponent = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('aboutleftdiv')) {
            entry.target.classList.add('scroll-animation');
          } else if (entry.target.classList.contains('aboutrightdiv')) {
            entry.target.classList.add('scroll-animation-delayed');
          }
        } else {
          if (entry.target.classList.contains('aboutleftdiv')) {
            entry.target.classList.remove('scroll-animation');
          } else if (entry.target.classList.contains('aboutrightdiv')) {
            entry.target.classList.remove('scroll-animation-delayed');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1
    });

    const leftRef = leftDivRef.current;
    const rightRef = rightDivRef.current;

    if (leftRef) {
      observer.observe(leftRef);
    }
    if (rightRef) {
      observer.observe(rightRef);
    }

    return () => {
      if (leftRef) {
        observer.unobserve(leftRef);
      }
      if (rightRef) {
        observer.unobserve(rightRef);
      }
    };
  }, []);

  return (
    <div id="about">
      <div className='heading'>
        <h1>About Me</h1>
      </div>
      <div className='about-container'>
        <div className='aboutleftdiv' ref={leftDivRef}>
          <img src={aboutimg} alt="Anjali Meena" />
        </div>
        <div className='aboutrightdiv' ref={rightDivRef}>
          <h2 className='aboutname'>I'm <b>Anjali Meena</b>,</h2> 
          <p>
            a frontend developer and a core student at Maulana Azad National Institute of Technology (MANIT), Bhopal. 
            I specialize in computer science with strong proficiency in C and C++, and a deep understanding of data structures and algorithms.
          </p>
          <p>
            My interests lie primarily in web development and data structures and algorithms (DSA). 
            Proficient in HTML, CSS, and JavaScript, I have hands-on experience with modern frameworks like React. 
            I've showcased my skills through projects like a Tic-Tac-Toe game, a weather app using an API, and a dynamic To-Do List built with React. 
            These projects highlight my ability to merge creativity with technical expertise, crafting intuitive and engaging web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

import React from 'react';
import './projects.css';
import travelImage from '../../assets/travel.jpg'; // Correct path to travel.jpg
import passwordGeneratorImage from '../../assets/password.webp'; // Correct path to passwordGenerator.jpg
import todolistImage from '../../assets/todolist.jpg'; // Correct path to todolist
import ticTacToeImage from '../../assets/tictactoe.webp'; // Correct path to tictactoe.webp
import weatherAppImage from '../../assets/weather.jpg'; // Correct path to weather.avif
import devDetectiveImage from '../../assets/devDetectiveImage.png'; 

const ProComponent = () => {
    return (
        <div id="projects">
            <div className="project-container">
      <div className='projectheading'>
      <h1 >My Projects</h1>
      </div>
      <div className="project-list">

         {/* Project 1: To-Do List */}
         <div className="project">
          <img src={todolistImage} alt="To-Do List" className="project-image" />
          <div className="project-details">
            <h2>To-Do List</h2>
            <p>
              This React-based To-Do List enables dynamic task management 
              with addition, deletion, state handling, and component rendering.
            </p>
            <a href="https://anjalimeena09.github.io/To-Do-List/" target="_blank" rel="noopener noreferrer">Check it out</a>
          </div>
        </div>

        {/* Project 2: Weather App */}
        <div className="project">
          <img src={weatherAppImage} alt="Weather App" className="project-image" />
          <div className="project-details">
            <h2>Weather App</h2>
            <p>
              This project is a Weather App that fetches weather data from an API using JavaScript. 
              It displays the current weather information for a given location.
            </p>
            <a href="https://anjalimeena09.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer">Check it out</a>
          </div>
        </div>

        {/* Project 3: Tic-Tac-Toe Game */}
        <div className="project">
          <img src={ticTacToeImage} alt="Tic-Tac-Toe Game" className="project-image" />
          <div className="project-details">
            <h2>Tic-Tac-Toe Game</h2>
            <p>
              This project is a Tic Tac Toe game built using HTML, CSS, and JavaScript. 
              It allows two players to play the game on the same computer.
            </p>
            <a href="https://anjalimeena09.github.io/Tic-Tak-Toe/" target="_blank" rel="noopener noreferrer">Check it out</a>
          </div>
        </div>

        {/* Project 4: Dev Detective */}
      <div className="project">
        <img src={devDetectiveImage} alt="Dev Detective" className="project-image" />
        <div className="project-details">
          <h2>Dev Detective</h2>
          <p>
          Dev Detective is a React-based platform for searching and exploring GitHub profiles and repositories, highlighting frontend & API integration skills.
          </p>
          <a href="https://anjalimeena09.github.io/Dev-Detective/" target="_blank" rel="noopener noreferrer">Check it out</a>
        </div>
      </div>


        {/* Project 5: Password Generator */}
        <div className="project">
          <img src={passwordGeneratorImage} alt="Password Generator" className="project-image" />
          <div className="project-details">
            <h2>Password Generator</h2>
            <p>
              This project is a password generator built using HTML, CSS, and JavaScript. 
              It allows users to generate random passwords by clicking a button.
            </p>
            <a href="https://anjalimeena09.github.io/PasswordGenerator/" target="_blank" rel="noopener noreferrer">Check it out</a>
          </div>
        </div>

        {/* Project 6: Travel Website */}
        <div className="project">
          <img src={travelImage} alt="Travel Website" className="project-image" />
          <div className="project-details">
            <h2>Travel Website</h2>
            <p>
              This project is a simple travel website built using HTML and CSS. 
              It showcases various travel destinations with images and descriptions.
            </p>
            <a href="https://anjalimeena09.github.io/TravelTheWorld/" target="_blank" rel="noopener noreferrer">Check it out</a>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ProComponent;

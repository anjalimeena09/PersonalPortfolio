import React from 'react';
import './skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";

const SkillsComponent = () => {
    return (
        <div className="skills">
            <div className='main-text'>
                <h1>My Skills</h1>
            </div>

            <div className='skill-main'>
                <div className='skill-left'>
                    <h2 className='skillsechead'>Technical Skills</h2>
                    
                    <div className='skill-bar'>
                        <div className='info'>
                            <p><FaHtml5 className='skill-icon' />HTML </p>
                            <p>95%</p>
                        </div>
                        <div className='bar'>
                            <span className='html'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p><FaCss3Alt size={18} className='skill-icon' />CSS </p>
                            <p>85%</p>
                        </div>
                        <div className='bar'>
                            <span className='css'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p><FaJs size={18} className='skill-icon' />JavaScript </p>
                            <p>80%</p>
                        </div>
                        <div className='bar'>
                            <span className='javascript'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p><FaReact size={18} className='skill-icon' />React </p>
                            <p>75%</p>
                        </div>
                        <div className='bar'>
                            <span className='react'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p><SiDatabricks size={18} className='skill-icon' />DSA</p>
                            <p>85%</p>
                        </div>
                        <div className='bar'>
                            <span className='dsa'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;






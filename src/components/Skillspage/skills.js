import React from 'react';
import './skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiDatabricks, SiSqlite} from "react-icons/si";
import { FaProjectDiagram,FaDatabase,FaCode } from "react-icons/fa";
// import { FaWindows,FaNetworkWired} from "react-icons/fa";
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
                            <p><FaCode size={18} className='skill-icon' />C/C++</p>
                            <p>95%</p>
                        </div>
                        <div className='bar'>
                            <span className='c'></span>
                        </div>
                    </div>
                    
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


                    <div className='skill-bar'>
                        <div className='info'>
                            <p>< FaProjectDiagram size={18} className='skill-icon' />OPPS</p>
                            <p>90%</p>
                        </div>
                        <div className='bar'>
                            <span className='opps'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p><FaDatabase size={18} className='skill-icon' />DBMS</p>
                            <p>85%</p>
                        </div>
                        <div className='bar'>
                            <span className='dbms'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p><SiSqlite size={18} className='skill-icon' />SQL</p>
                            <p>80%</p>
                        </div>
                        <div className='bar'>
                            <span className='sql'></span>
                        </div>
                    </div>

                    {/* <div className='skill-bar'>
                        <div className='info'>
                            <p><FaNetworkWired  size={18} className='skill-icon' />Computer Network</p>
                            <p>85%</p>
                        </div>
                        <div className='bar'>
                            <span className='computernetwork'></span>
                        </div>
                    </div>

                    <div className='skill-bar'>
                        <div className='info'>
                            <p>< FaWindows size={18} className='skill-icon' />Operating System</p>
                            <p>80%</p>
                        </div>
                        <div className='bar'>
                            <span className='operatingsystem'></span>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;






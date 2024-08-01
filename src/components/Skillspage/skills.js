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








// import React from 'react';
// import './skills.css';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// import { SiDatabricks } from "react-icons/si";

// const SkillsComponent = () => {
//     return (
//         <div className="skills">
//         <div className="skills-container">
//             <div>
//             <h1  className='headcont'>My Skills</h1>
//             </div>
//             <div className='skillhead'>
//                 <h3 className="skills-heading">Technical Skills</h3>
//             </div>
//             <div>
//                 <div className="skill">
//                     <span className="skill-name">HTML <FaHtml5 /></span>
//                     <div className="skill-bar">
//                         <div className="skill-percentage html">95%</div>
//                     </div>
//                 </div>
//                 <div className="skill">
//                     <span className="skill-name">CSS <FaCss3Alt /></span>
//                     <div className="skill-bar">
//                         <div className="skill-percentage css">95%</div>
//                     </div>
//                 </div>
//                 <div className="skill">
//                     <span className="skill-name">JavaScript <FaJs /></span>
//                     <div className="skill-bar">
//                         <div className="skill-percentage javascript">80%</div>
//                     </div>
//                 </div>
//                 <div className="skill">
//                     <span className="skill-name">React <FaReact /></span>
//                     <div className="skill-bar">
//                         <div className="skill-percentage react">70%</div>
//                     </div>
//                 </div>
//                 <div className="skill">
//                     <span className="skill-name">DSA <SiDatabricks /></span>
//                     <div className="skill-bar">
//                         <div className="skill-percentage dsa">80%</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default SkillsComponent;



import React, { useState} from "react";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1 className="brand">
            <span className="highlight">Anjali.</span>
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>

        {/* Desktop and mobile navbar */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {navItems.map(({ id, text }) => (
            <li className="nav-item" key={id}>
              <Link
                to={text.toLowerCase()} // Adjusted to lowercase for smoother scrolling
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
                className="nav-link"
                onClick={() => setIsOpen(false)} // Close menu on click (mobile)
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { IoMenu, IoClose } from "react-icons/io5";


// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
//   const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Skills" },
//     { id: 4, text: "Projects" },
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <div className={"navbar" + (isSticky ? " sticky" : "")}>
//       <div className="navbar-container">
//         <div className="logo">
//           <h1 className="brand">
//             <span className="highlight">Anjali.</span>
//           </h1>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="menu-icon" onClick={toggleMenu}>
//           {isOpen ? <IoClose /> : <IoMenu />}
//         </div>

//         {/* Desktop and mobile navbar */}
//         <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
//           {navItems.map(({ id, text }) => (
//             <li className="nav-item" key={id}>
//               <Link
//                 to={text.toLowerCase()} // Adjusted to lowercase for smoother scrolling
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 spy={true}
//                 exact="true"
//                 className="nav-link"
//                 onClick={() => setIsOpen(false)} // Close menu on click (mobile)
//               >
//                 {text}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;







// import React, { useState } from "react";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Portfolio" },
//     { id: 4, text: "Experience" },
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <h1 className="brand">
//             <span className="highlight">Anjali.</span>
//           </h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="mobile-menu-toggle" onClick={toggleMenu}>
//           <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
//         </div>

//         {/* Desktop navbar */}
//         <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
//           {navItems.map(({ id, text }) => (
//             <li className="nav-item" key={id}>
//               <Link
//                 to={text.toLowerCase()} // Adjusted to lowercase for smoother scrolling
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 spy={true}
//                 exact="true"
//                 className="nav-link"
//                 onClick={() => setIsOpen(false)} // Close menu on item click (for mobile)
//               >
//                 {text}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





// import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [menu, setMenu] = useState(false);

//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Portfolio" },
//     { id: 4, text: "Experience" }, // Corrected typo in "Experience"
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <h1 className="brand">
//             <span className="highlight">Anjali.</span>
//           </h1>
//         </div>
//         {/* Desktop navbar */}
//         <ul className="nav-menu">
//           {navItems.map(({ id, text }) => (
//             <li className="nav-item" key={id}>
//               <Link
//                 to={text.toLowerCase()} // Adjusted to lowercase for smoother scrolling
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 spy={true}
//                 exact="true"
//                 className="nav-link"
//               >
//                 {text}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         {/* Mobile navbar */}
//         <div className="mobile-menu-icon" onClick={() => setMenu(!menu)}>
//           {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//           {/* Apply "active" class when menu is open */}
//           <div className={`mobile-menu-icon-overlay ${menu ? "active" : ""}`}></div>
//         </div>
//       </div>
//       {menu && (
//         <div className="mobile-menu">
//           <ul className="mobile-nav-menu">
//             {navItems.map(({ id, text }) => (
//               <li className="mobile-nav-item" key={id}>
//                 <Link
//                   onClick={() => setMenu(!menu)}
//                   to={text.toLowerCase()} // Adjusted to lowercase for smoother scrolling
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   spy={true}
//                   exact="true"
//                   className="mobile-nav-link"
//                 >
//                   {text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;





// import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
// function Navbar() {
//   const [menu, setMenu] = useState(false);
//   const navItems = [
//     {
//       id: 1,
//       text: "Home",
//     },
//     {
//       id: 2,
//       text: "About",
//     },
//     {
//       id: 3,
//       text: "Portfolio",
//     },
//     {
//       id: 4,
//       text: "Experiance",
//     },
//     {
//       id: 5,
//       text: "Contact",
//     },
//   ];
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
//         <div className="flex justify-between items-center h-16">
//           <div className=" flex space-x-2">
//             <img src={pic} className="h-12 w-12 rounded-full" alt="" />
//             <h1 className="font-semibold text-xl cursor-pointer">
//               Akhi<span className="text-green-500 text-2xl">l</span>
//               <p className="text-sm">Web Developer</p>
//             </h1>
//           </div>
//           {/* desktop navbar */}
//           <div>
//             <ul className="hidden md:flex space-x-8">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div onClick={() => setMenu(!menu)} className="md:hidden">
//               {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//             </div>
//           </div>
//         </div>
//         {/* mobile navbar */}
//         {menu && (
//           <div className="bg-white">
//             <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 font-semibold cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     onClick={() => setMenu(!menu)}
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;




// import React from "react";
// import { useState } from "react";
// import {AiOutlineMenu} from "react-icons/ai";
// import {IoCloseSharp} from "react-icons/io5";

// function Navbar(){
//   const [menu,setMenu]=useState(false);
//     return(
//     <div>
//     <div className='navbar'>
//       <div className='navhead'>
//         <div className='head'>
//           <h1 className='header'>Anjali</h1>
//         </div>
//         {/* desktop navbar */}
//         <ul className='nav-list'>
//           <li className='nav-item'>Home</li>
//           <li className='nav-item'>About</li>
//           <li className='nav-item'>Skills</li>
//           <li className='nav-item'>Projects</li>
//           <li className='nav-item'>Contact</li>
//         </ul>
//         <div onClick={()=>setMenu(!menu)}>{menu?<AiOutlineMenu/>:<IoCloseSharp/>}</div>
//       </div>
//     </div>

//     {/* mobile navbar */}
//     <div>
//       <ul className="md:hidden">
//           <li className='nav-item'>Home</li>
//           <li className='nav-item'>About</li>
//           <li className='nav-item'>Skills</li>
//           <li className='nav-item'>Projects</li>
//           <li className='nav-item'>Contact</li>
//         </ul>
//       </div>
//   </div>
//     )
// }

// export default Navbar;


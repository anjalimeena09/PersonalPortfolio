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



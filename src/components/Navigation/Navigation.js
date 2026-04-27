// import React, { useState } from "react";
// import "./Navigation.css";
// import logo from "../../accets/logo/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

// const Navigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="nav_parent_div">
//       <header className="nav_container">
//         {/* TOP BAR */}
//         <div className="nav_top">
//           <div className="nav_logo">
//             <Link to="/home">
//               <img src={logo} alt="logo" />
//             </Link>
//           </div>

//           <div className="nav_actions">
//             <p className="nav_email_p">
//               <FontAwesomeIcon icon={faEnvelope} /> support@solutiongrid.com
//             </p>

//             <div className="nav_phone">
//               <a
//                 href="https://wa.me/+447932506226"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>
//                   <FontAwesomeIcon
//                     className="nav_faWhatsapp"
//                     icon={faWhatsapp}
//                   />{" "}
//                   +44 7932 506226
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* MENU BAR */}
//         <div className="nav_bottom">
//           <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
//             <FontAwesomeIcon
//               className="nav_icon"
//               icon={menuOpen ? faTimes : faBars}
//             />
//           </div>

//           <ul className={menuOpen ? "nav_menu active" : "nav_menu"}>
//             <li>
//               <FontAwesomeIcon icon={faEnvelope} />
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faEnvelope} />
//               <Link to="/about"> About</Link>{" "}
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faEnvelope} />
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faEnvelope} />
//               <Link to="/portfolio">Portfolio</Link>
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faEnvelope} /> Contact
//             </li>

//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../accets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faEnvelope,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <div className="nav_parent_div">
      <header className="nav_container">
        {/* TOP BAR */}
        <div className="nav_top">
          <div className="nav_logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="nav_actions">
            <p className="nav_email_p">
              <FontAwesomeIcon icon={faEnvelope} /> support@solutiongrid.com
            </p>

            <div className="nav_phone">
              <a
                href="https://wa.me/+447932506226"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon
                    className="nav_faWhatsapp"
                    icon={faWhatsapp}
                  />{" "}
                  +44 7932 506226
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="nav_bottom">
          <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              className="nav_icon"
              icon={menuOpen ? faTimes : faBars}
            />
          </div>

          <ul className={menuOpen ? "nav_menu active" : "nav_menu"}>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> <Link to="/home">Home</Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <Link to="/about">About</Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="dropdown"
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              <div className="dropdown_title">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Services</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="dropdown_icon"
                />
              </div>

              <ul
                className={
                  serviceOpen ? "dropdown_menu active" : "dropdown_menu"
                }
              >
                <Link to="/softwareAndSystem">
                  <li>Software & System Development</li>
                </Link>
                <Link to="/aiAutomation">
                  <li>AI Automation</li>
                </Link>
                <Link to="/websiteDesign">
                  <li>Website Design & Development</li>
                </Link>
                <Link to="/videoEditing">
                  <li>Video Editing</li>
                </Link>
                <Link to="/digitalMarketing">
                  <li>Digital Marketing</li>
                </Link>
                <Link to="/uiUx">
                  <li>UI/UX Design</li>
                </Link>
                <Link to="/graphicDesign">
                  <li>Graphic Design</li>
                </Link>
                <Link to="/contentDevelopment">
                  <li>Content Development</li>
                </Link>
              </ul>
            </li>

            <li>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navigation;

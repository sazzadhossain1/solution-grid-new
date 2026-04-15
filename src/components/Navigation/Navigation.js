// import React from "react";
// import "./Navigation.css";
// import logo from "../../accets/logo/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faEnvelope,
//   faWandMagicSparkles,
// } from "@fortawesome/free-solid-svg-icons";

// const Navigation = () => {
//   return (
//     <div className="navigation_main_parent_div">
//       <div className="navigation_first_flex_div">
//         <div className="navigation_flex_div">
//           <div>
//             <img src={logo} alt="" />
//           </div>
//           <div className="navigation_child_flex_div">
//             <p>
//               <FontAwesomeIcon className="navigation_icon" icon={faEnvelope} />{" "}
//               Contact
//             </p>
//             <p>
//               {" "}
//               <FontAwesomeIcon
//                 className="navigation_icon"
//                 icon={faWandMagicSparkles}
//               />{" "}
//               Free Consultation
//             </p>
//             <div className="navigation_number_div">
//               <span>017 XXX XXX XX</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="navigation_lower_part_div">
//         <FontAwesomeIcon className="faBars" icon={faBars} />
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> Our Services
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> Start-ups
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> Existing Business
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> Digital Marketing
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> eCommerce
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> Mobile App
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> ERP Solution
//           </li>
//           <li>Video animation</li>
//         </ul>
//       </div>
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
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav_parent_div">
      <header className="nav_container">
        {/* TOP BAR */}
        <div className="nav_top">
          <div className="nav_logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="nav_actions">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </p>

            <p>
              <FontAwesomeIcon icon={faWandMagicSparkles} /> Free Consultation
            </p>

            <div className="nav_phone">
              <span>+880179.359.6432</span>
            </div>
          </div>
        </div>

        {/* MENU BAR */}
        <div className="nav_bottom">
          <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              className="nav_icon"
              icon={menuOpen ? faTimes : faBars}
            />
          </div>

          <ul className={menuOpen ? "nav_menu active" : "nav_menu"}>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Home
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> About
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Services
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Portfolio
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Login
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navigation;

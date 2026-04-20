import React, { useState, useEffect } from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCode,
  faDrawPolygon,
  faEnvelope,
  faRobot,
  faTimes,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  faBuffer,
  faElementor,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
  });

  // 🔒 Lock scroll when modal open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  // 🔄 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 📩 Send email
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s8d5yt4",
        "template_yujwqxa",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          time: formData.time,
        },
        "lpEFo_l5w6i06KfjP",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setOpenModal(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            time: "",
          });
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        },
      );
  };
  return (
    <div className="banner_parent_div">
      <h1>We Can Help You Grow Your Business</h1>

      <p>
        We specialise in the Websites, Mobile Apps, Digital Marketing, Branding
        and IT Solutions
      </p>

      <div className="banner_grid_div">
        <Link>
          <div className="banner_cart_one banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faCode} />
            <br />
            <span>Software & System Development</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_two banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faRobot} />
            <br />
            <span>Ai Automation</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_three banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faElementor} />
            <br />
            <span>Website Design & Development</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_four banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faVideo} />
            <br />
            <span>Video Editing</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_five banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faBullhorn} />

            <br />
            <span>Digital Marketing</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_six banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faFigma} />
            <br />
            <span>UI/UX Design</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_saven banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faDrawPolygon} />

            <br />
            <span>Graphic Design</span>
          </div>
        </Link>

        <Link>
          <div className="banner_cart_eight banner_card">
            <FontAwesomeIcon className="banner_icon" icon={faBuffer} />
            <br />
            <span>Content Development</span>
          </div>
        </Link>
      </div>

      {/* 🔘 BUTTON */}
      <div className="banner_btn_parent_div">
        <Link className="banner_link_btn" to="#">
          <div className="banner_btn_div" onClick={() => setOpenModal(true)}>
            Book a Free Consultation
          </div>
        </Link>
      </div>

      {/* 🔥 MODAL */}
      {openModal && (
        <div className="modal_overlay">
          <div className="modal_box">
            {/* ❌ CLOSE BUTTON */}
            <div className="modal_close" onClick={() => setOpenModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <h2>Book a Free Consultation</h2>

            <form className="modal_form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="time"
                placeholder="Best time to reach you"
                value={formData.time}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;

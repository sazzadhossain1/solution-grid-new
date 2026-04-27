import React, { useEffect, useState } from "react";
import "./FirstSection.css";
import firstPhoto from "../../accets/firstSection/firstPhoto.jpg";
import secondPhoto from "../../accets/firstSection/secondPhoto.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const FirstSection = () => {
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
    <div className="first_section_parent">
      <h1 className="firstSection_heading">
        Dominate the World with SolutionGrid
      </h1>

      <p className="firstSection_first_p">
        SolutionGrid specialises in the field of Ai Automation, software
        development, websites, mobile apps, digital marketing, video editing and
        graphic design for companies of all sizes and industry segments. We
        focus on providing you with meaningful and immediate results.
      </p>

      <div className="fistSection_grid_div">
        {/* 🔴 FIRST SVG */}
        <div className="firstSection_first_cart_div">
          <svg width="500" height="400" viewBox="0 0 730 540">
            <defs>
              <linearGradient
                id="borderGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff2d7a" />
                <stop offset="100%" stopColor="#ff4d2d" />
              </linearGradient>
            </defs>

            <path
              d="M0,28l45,477l648,24L714,0L0,28z"
              fill="none"
              stroke="url(#borderGradient1)"
              strokeWidth="20"
              strokeLinejoin=""
            />
          </svg>
          <img className="firstPhoto" src={firstPhoto} alt="" />
          <div className="first_section_cart_text_div">
            <h3>AFRE YOU A START-UP?</h3>
            <p>
              Allow us to set you up with a professional website and add value
              to your branding.
            </p>
            <Link>
              <button
                className="firstSection_btn1"
                onClick={() => setOpenModal(true)}
              >
                Get a Free Consultaion
              </button>
            </Link>
          </div>
        </div>

        {/* 🟣 SECOND SVG */}
        <div className="firstSection_second_cart_div">
          <svg width="500" height="400" viewBox="0 0 730 540">
            <defs>
              <linearGradient
                id="borderGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8e2de2" />
                <stop offset="100%" stopColor="#4a00e0" />
              </linearGradient>
            </defs>

            <path
              d="M0,28l45,477l648,24L714,0L0,28z"
              fill="none"
              stroke="url(#borderGradient2)"
              strokeWidth="20"
              strokeLinejoin=""
            />
          </svg>
          <img className="secondPhoto" src={secondPhoto} alt="" />
          <div className="first_section_cart_text_div">
            <h3>HAVE YOU AUTOMATED YOUR BUSINESS PROCESSES YET?</h3>
            <p>
              Avoid human error and have everything automated so your support
              service can be 24/7.
            </p>
            <Link>
              <button
                className="firstSection_btn2"
                onClick={() => setOpenModal(true)}
              >
                Get a Free Consultaion
              </button>
            </Link>
          </div>
        </div>
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

export default FirstSection;

import React, { useState, useEffect } from "react";
import "./ThirdSection.css";
import thirdSectionPhoto from "../../accets/thirdSection/thirdSectionPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ThirdSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
  });

  // 🔒 Lock scroll
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  // 🔄 Handle input
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
    <div className="thirdSection_parent_div">
      <img src={thirdSectionPhoto} alt="" />

      <div className="thirdSection_text_div">
        <h2>Professional IT Services Portal</h2>

        <p className="thirdSection_first_p">
          Where technology meets artistic imagination
        </p>

        <p className="thirdSection_second_p">
          We understand unique IT business needs and our team of experts is
          ready to provide high-quality solutions customised to each customer in
          the most cost-effective way possible with the highest quality
          standards
        </p>

        <p className="thirdSection_third_p">
          At Solution grid, we follow and adhere to the following international
          quality standards and requirements to deliver your desired services in
          a cost-effective and timely manner:
        </p>

        <ul>
          <li>ISO-9001 to meet customer quality expectations</li>
          <li>
            ISO-14001 to work in an environmentally-friendly and sustainable way
          </li>
          <li>
            ISO-27001 to keep your sensitive information assets safe and secure
          </li>
          <li>
            ISO/IEC/IEEE-29119 for high-quality approach to software testing
          </li>
          <li>
            Statutory HSE regulations and standards to keep our colleagues and
            wider public safe of harm’s way
          </li>
        </ul>

        {/* 🔘 BUTTON */}
        <button onClick={() => setOpenModal(true)}>
          Book a Free Consultation
        </button>
      </div>

      {/* 🔥 MODAL */}
      {openModal && (
        <div className="modal_overlay">
          <div className="modal_box">
            <div className="modal_close" onClick={() => setOpenModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <h2>Book a Free Consultation</h2>

            <form className="thirdSection_modal_form" onSubmit={handleSubmit}>
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

export default ThirdSection;
// Service Id: service_s8d5yt4
// Template ID: template_yujwqxa
// Public Key: lpEFo_l5w6i06KfjP

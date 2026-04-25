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
        <h2>
          Affordable, high-quality tech solutions where innovation meets
          creativity
        </h2>

        {/* <p className="thirdSection_first_p">
          Solutiongrid.com takes the stress out of technology so you can focus
          on what matters most, growing your business. From complex software
          development to modern websites, AI automation, graphics, and video
          editing, we handle it all with precision and care.
        </p>

        <p className="thirdSection_second_p">
          No more dealing with confusing tech or inflated costs. Our team
          delivers high-quality, reliable solutions at rates that make sense,
          without cutting corners. Whether you’re a startup or an established
          business, we simplify the process and bring your ideas to life
          efficiently
        </p>

        <p className="thirdSection_third_p">
          Where technology meets artistic imagination, Solutiongrid blends
          innovation with creativity to build solutions that not only work
          flawlessly but also stand out.
        </p> */}

        <ul>
          <li>
            Solutiongrid.com takes the stress out of technology so you can focus
            on what matters most, growing your business. From complex software
            development to modern websites, AI automation, graphics, and video
            editing, we handle it all with precision and care.
          </li>
          <li>
            No more dealing with confusing tech or inflated costs. Our team
            delivers high-quality, reliable solutions at rates that make sense,
            without cutting corners. Whether you’re a startup or an established
            business, we simplify the process and bring your ideas to life
            efficiently.
          </li>
          <li>
            Where technology meets artistic imagination, Solutiongrid blends
            innovation with creativity to build solutions that not only work
            flawlessly but also stand out.
          </li>
          {/* <li>
            ISO/IEC/IEEE-29119 for high-quality approach to software testing
          </li>
          <li>
            Statutory HSE regulations and standards to keep our colleagues and
            wider public safe of harm’s way
          </li> */}
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

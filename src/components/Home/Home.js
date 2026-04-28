import React, { useEffect } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ForthSection from "../ForthSection/ForthSection";
import { useLocation } from "react-router-dom";

const Home = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div>
      <Banner></Banner>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <ForthSection></ForthSection>
      {/* <FifthSection></FifthSection> */}
    </div>
  );
};

export default Home;
// https://www.vservices.com/ ai site er moto kore create korte hobe.

import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ForthSection from "../ForthSection/ForthSection";

const Home = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
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

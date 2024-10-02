import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import WeAreSpark from "./Components/WeAreSpark/WeAreSpark";
import OurApproach from "./Components/OurApproach/OurApproach";
import GrowingStrategy from "./Components/GrowingStrategy/GrowingStrategy";
import Projects from "./Components/Projects/Projects";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <HomeHeader />
        <WeAreSpark />
        <OurApproach />
        <GrowingStrategy />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

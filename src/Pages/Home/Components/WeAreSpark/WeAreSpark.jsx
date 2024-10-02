import React from "react";
import style from "./WeAreSpark.module.css";
export default function WeAreSpark() {
  return (
    <div className={style.container}>
      <span className={style.weare}>We Are</span>
      <div className={style.spark}>
        <img
          src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
          alt=""
        />
        <span>Spark</span>
      </div>
      <p className={style.text}>
        We understand the importance of digital marketing and are dedicated to
        helping businesses achieve their online goals. Here are just a few
        reasons why you should choose us for your digital marketing needs.
      </p>
      <img
        className={style.img}
        src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5f170c1f3f04f7487e3b5_We%20Are%20Video%20Image-p-1080.webp"
      />
    </div>
  );
}

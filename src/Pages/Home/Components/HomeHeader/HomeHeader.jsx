import React from "react";
import GetInTouchButton from "../../../../Components/GetInTouchButton/GetInTouchButton";
import style from "./HomeHeader.module.css";
export default function HomeHeader() {
  return (
    <div className={style.container}>
      <span className={style.pfirst}>Drive More With</span>
      <span className={style.psec}>Digital Marketing</span>
      <span className={style.pthr}>
        Our Agency Drives Results, and Fuels Success in the Dynamic Landscape of
        Online Marketing. Let's Transform Your Vision.
      </span>
      <GetInTouchButton />
      <svg
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: "50px",
        }}
        width="216"
        height="216"
        viewBox="0 0 216 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M143 106C125.879 106 112 92.1208 112 75V2C112 0.895431 111.105 0 110 0C108.895 0 108 0.895429 108 2V75C108 92.1208 94.1208 106 77 106H2C0.895431 106 0 106.895 0 108C0 109.105 0.895429 110 2 110H77C94.1208 110 108 123.879 108 141V214C108 215.105 108.895 216 110 216C111.105 216 112 215.105 112 214V141C112 123.879 125.879 110 143 110H214C215.105 110 216 109.105 216 108C216 106.895 215.105 106 214 106H143Z"
          fill="#FAF9FE"
        />
      </svg>
    </div>
  );
}

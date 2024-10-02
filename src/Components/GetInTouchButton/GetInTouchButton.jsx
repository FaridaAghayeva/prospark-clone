import React from "react";
import style from "../Footer/Footer.module.css";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function GetInTouchButton() {
  return (
    <div className={style.footerButton}>
      <FaLongArrowAltDown style={{ color: "white" }} />
      <span>Get in touch</span>
    </div>
  );
}

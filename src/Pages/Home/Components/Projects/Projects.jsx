import React from "react";
import style from "./Projects.module.css";
import Project from "../../../Project/Project";

export default function Projects() {
  return (
    <div>
      <div className={style.container}>
        <span className={style.our}>Our</span>
        <div className={style.spark}>
          <img
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          <span>Case Studies</span>
        </div>
      </div>
      <Project />
    </div>
  );
}

import React, { useContext } from "react";
import { DataProjects } from "../../Shared/ProjectContext";
import style from "./Project.module.css";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Project() {
  const { projects } = useContext(DataProjects);

  return (
    <div className={style.container}>
      {projects.map((item) => {
        return (
          <div className={style.items} key={item.id}>
            <img src={item.img} className={style.img} />
            <div className={style.arrow}>
              <MdArrowOutward />
            </div>
            <div className={style.buttons}>
              <div className={style.button}>Boost</div>
              <div className={style.button}>Marketing</div>
              <div className={style.button}>Website</div>
            </div>
            <div className={style.titleContainer}>
              {/* <NavLink to={`/projects/${item.title}`}>
                <span className={style.title}>{item.title}</span>
              </NavLink> */}
              <NavLink to={`/projects/${item.id}`}>
                <span className={style.title}>{item.title}</span>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

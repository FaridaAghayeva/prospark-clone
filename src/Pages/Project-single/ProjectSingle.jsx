import React, { useContext } from "react";
import { DataProjects } from "../../Shared/ProjectContext";
import { useParams } from "react-router-dom";
import style from "./ProjectSingle.module.css";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function ProjectSingle() {
  const { projects } = useContext(DataProjects);
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((project) => project.id === projectId);

  return (
    <div className={style.all}>
      <Navbar />
      <div className={style.projectSingleTitle}>
        <p>{project?.title}</p>
      </div>
      <div className={style.projectSingleImg}>
        <img src={project?.img} />
      </div>
      <div className={style.table}>
        <div>
          <span className={style.titleItems}>Client</span>
          <span className={style.titleTexts}>{project?.client}</span>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div>
          <span className={style.titleItems}>Type</span>
          <span className={style.titleTexts}>{project?.type}</span>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div>
          <span className={style.titleItems}>Recognition</span>
          <span className={style.titleTexts}>{project?.recognition}</span>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div>
          <span className={style.titleItems}>Year</span>
          <span className={style.titleTexts}>{project?.year}</span>
        </div>
        <hr style={{ width: "100%" }}></hr>
      </div>
      <div>
        <p className={style.objective}>Objective</p>
        <p className={style.result}>{project?.objective}</p>
      </div>
      <div>
        <p className={style.objective}>Define Goals and Audience</p>
        <div className={style.liItems}>
          {project?.goals?.map((item, i) => (
            <p key={i}>
              {i + 1} {item}
            </p>
          ))}
        </div>
      </div>
      <div className={style.projectSingleImg}>
        <img src={project?.img} />
      </div>
      <div>
        <p className={style.objective}>Result</p>
        <p className={style.result}>{project?.result}</p>
      </div>
      <div>
        <div className={style.container2}>
          <span className={style.related}>Related</span>
          <div className={style.spark}>
            <img
              src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
              alt=""
            />
            <span>Projects</span>
          </div>
        </div>
        <div className={style.container}>
          {projects
            ?.filter((item) => item.id !== projectId)
            .map((item) => (
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
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

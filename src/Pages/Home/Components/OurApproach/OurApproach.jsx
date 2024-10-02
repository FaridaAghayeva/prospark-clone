import React, { useContext } from "react";
import style from "./OurApproach.module.css";
import { DataServices } from "../../../../Shared/ServicesContext";

export default function OurApproach() {
  const { services } = useContext(DataServices);
  console.log(services);
  return (
    <div className={style.container}>
      <span className={style.clever}>Our Clever</span>
      <div className={style.approach}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span>Approach</span>
      </div>
      <div className={style.approachsContainer}>
        {services?.map((item) => {
          return (
            <div key={item?.id}>
              <div className={style.itemsContainer} >
                <div className={style.number}>{item?.number} </div>
                <div className={style.titleContainer}>
                  <span className={style.title}> {item?.title}</span>
                  <p className={style.text}> {item?.text}</p>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

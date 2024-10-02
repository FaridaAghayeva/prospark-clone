import React from "react";
import style from "./GrowingStrategy.module.css";

export default function GrowingStrategy() {
  const strategies = [
    {
      id: 1,
      logo: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71112277d9393554d8e86_Strategy%20Icon%2001.svg",
      title: "Client Onboarding and Strategy Development",
      text1:
        "Initial meeting to understand client goals, target audience, and brand identity.",
      text2:
        "Conduct a thorough analysis of the client's current online presence.",
      img: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f12851e3840dfa72389_Strategy%20Image%2001-p-500.webp",
    },
    {
      id: 2,
      logo: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d711112708e5116b953dba_Strategy%20Icon%2002.svg",
      title: "Campaign Planning and Execution",
      text1:
        "Initial meeting to understand client goals, target audience, and brand identity.",
      text2:
        "Conduct a thorough analysis of the client's current online presence.",
      img: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f12bb53a5b87f34f533_Strategy%20Image%2002-p-500.webp",
    },
    {
      id: 3,
      logo: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d711118aa426ac4af2a045_Strategy%20Icon%2003.svg",
      title: "Content Creation and Distribution",
      text1:
        "Initial meeting to understand client goals, target audience, and brand identity.",
      text2:
        "Conduct a thorough analysis of the client's current online presence.",
      img: "https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d70f1291140314a053b65d_Strategy%20Image%2003-p-500.webp",
    },
  ];
  return (
    <div className={style.container}>
      <span className={style.clever}>Grow Using</span>
      <div className={style.approach}>
        <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg" />
        <span>Our Strategy</span>
      </div>
      <div className={style.strategiesContainer}>
        {strategies.map((item) => {
          return (
            <div
              className={item.id === 2 ? style.strategies2 : style.strategies}
              key={item.id}
            >
              <div className={item.id === 2 ? style.containerId2 : ""}>
                <div className={style.logoContainer}>
                  <img src={item.logo} className={style.logo} />
                </div>
                <div className={style.title}>
                  <span>{item.title}</span>
                </div>
                <div className={style.textContainer}>
                  <div className={style.texts}>
                    <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71111b566b4f91fb23cb6_Strategy%20List%20Shape.svg" />
                    <span>{item.text1}</span>
                  </div>
                  <div className={style.texts}>
                    <img src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d71111b566b4f91fb23cb6_Strategy%20List%20Shape.svg" />
                    <span>{item.text2}</span>
                  </div>
                </div>
              </div>
              <div className={item.id === 2 ? style.imgId2 : ""}>
                <img style={{ borderRadius: "20px" }} src={item.img} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

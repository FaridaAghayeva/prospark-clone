import { createContext, useEffect, useState } from "react";

export const DataProjects = createContext();
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const projectsArray = [
    {
      id: 1,
      img: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d739afde83edcde03b0636_Project%20Image%2006-p-800.webp",
      title: "Growth Marketing for Anox",
      client: "client11",
      type: "type1",
      recognition: "recognition1",
      year: 2024,
      objective: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
        asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
        dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
        adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
        laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
        accusantium deserunt laborum ab rem?`,
      goals: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
      ],
      result: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
      asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
      dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
      adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
      laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
      accusantium deserunt laborum ab rem?`,
    },

    {
      id: 2,
      img: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d7396d60b8dd7bcb137aea_Project%20Image%2005.webp",
      title: "Ads Strategy for Global Fintech SaaS",
      client: "client11",
      type: "type2",
      recognition: "recognition2",
      year: 2024,
      objective: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
        asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
        dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
        adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
        laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
        accusantium deserunt laborum ab rem?`,
      goals: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
      ],
      result: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
      asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
      dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
      adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
      laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
      accusantium deserunt laborum ab rem?`,
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d7394de4e95d990756c11b_Project%20Image%2004-p-800.webp",
      title: "Social Media Marketing for Stride",
      client: "client11",
      type: "type3",
      recognition: "recognition3",
      year: 2024,
      objective: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
        asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
        dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
        adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
        laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
        accusantium deserunt laborum ab rem?`,
      goals: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
      ],
      result: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
      asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
      dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
      adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
      laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
      accusantium deserunt laborum ab rem?`,
    },
    {
      id: 4,
      img: "https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d7392c5f5f237c0445e0da_Project%20Image%2003-p-800.webp",
      title: "Email Marketing for Ecom",
      client: "client11",
      type: "type4",
      recognition: "recognition4",
      year: 2024,
      objective: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
        asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
        dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
        adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
        laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
        accusantium deserunt laborum ab rem?`,
      goals: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil!`,
      ],
      result: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
      asperiores cupiditate perspiciatis laboriosam sequi, laudantium sunt
      dicta. Sapiente tempora illo mollitia rem nam, perferendis quas qui
      adipisci maxime ipsam corrupti eius modi exercitationem saepe, eos sed
      laboriosam veniam blanditiis? Quia quisquam dicta nihil iusto excepturi
      accusantium deserunt laborum ab rem?`,
    },
  ];
  useEffect(() => {
    setProjects(projectsArray);
  }, []);

  return (
    <DataProjects.Provider value={{ projects, setProjects }}>
      {children}
    </DataProjects.Provider>
  );
};

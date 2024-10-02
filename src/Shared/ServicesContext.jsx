import { createContext, useEffect, useState } from "react";

export const DataServices = createContext();
export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const servicesArray = [
    {
      id: 1,
      number: "01",
      title: "Ads Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 2,
      number: "02",
      title: "Data Analytics",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 3,
      number: "03",
      title: "SEO Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 4,
      number: "04",
      title: "Email Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 5,
      number: "05",
      title: "Content Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 6,
      number: "06",
      title: "Social Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  useEffect(() => {
    setServices(servicesArray);
  }, []);

  return (
    <DataServices.Provider value={{ services, setServices }}>
      {children}
    </DataServices.Provider>
  );
};

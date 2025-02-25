import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProjectProvider } from "./Shared/ProjectContext";
import { ServiceProvider } from "./Shared/ServicesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ServiceProvider>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </ServiceProvider>
);

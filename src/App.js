import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Blog from "./Pages/Blog/Blog";
import Pricing from "./Pages/Pricing/Pricing";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import ProjectsOther from "./Pages/ProjectsOther/ProjectsOther";
import ProjectSingle from "./Pages/Project-single/ProjectSingle";
import "../src/App.css";
// import { useContext } from "react";
// import { DataProjects } from "./Shared/ProjectContext";

function App() {
  // const { projects } = useContext(DataProjects);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<ProjectsOther />} />
          <Route path="projects/:id" element={<ProjectSingle />} />
          {/* {projects.map((item) => (
            <Route
              key={item.id}
              path={`/projects/${item.title}`}
              element={<ProjectSingle />}
            />
          ))} */}
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;

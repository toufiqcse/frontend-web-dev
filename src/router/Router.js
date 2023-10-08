// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Rooot from "../layout/Root/Rooot";
import Contact from "../pages/Contact/Contact";
import About from "../pages/about/About.jsx";
import Skill from "../pages/Skill/Skill";
import Projects from "../pages/Projects/Projects";
import Home from "../pages/Home/HomePage/Home/Home";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
export default routes;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import SoftwareAndSystem from "./components/SoftwareAndSystem/SoftwareAndSystem";
import AiAutomation from "./components/AiAutomation/AiAutomation";
import WebsiteDesign from "./components/WebsiteDesign/WebsiteDesign";
import VideoEditing from "./components/VideoEditing/VideoEditing";
import DigitalMarketing from "./components/DigitalMarketing/DigitalMarketing";
import UiUx from "./components/UiUx/UiUx";
import GraphicDesign from "./components/GraphicDesign/GraphicDesign";
import ContentDevelopment from "./components/ContentDevelopment/ContentDevelopment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/portfolio",
          element: <Portfolio></Portfolio>,
        },
        {
          path: "/softwareAndSystem",
          element: <SoftwareAndSystem></SoftwareAndSystem>,
        },
        {
          path: "/aiAutomation",
          element: <AiAutomation></AiAutomation>,
        },
        {
          path: "/websiteDesign",
          element: <WebsiteDesign></WebsiteDesign>,
        },
        {
          path: "/videoEditing",
          element: <VideoEditing></VideoEditing>,
        },
        {
          path: "/digitalMarketing",
          element: <DigitalMarketing></DigitalMarketing>,
        },
        {
          path: "/uiUx",
          element: <UiUx></UiUx>,
        },
        {
          path: "/graphicDesign",
          element: <GraphicDesign></GraphicDesign>,
        },
        {
          path: "/contentDevelopment",
          element: <ContentDevelopment></ContentDevelopment>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

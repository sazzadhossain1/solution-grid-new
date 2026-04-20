import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";

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

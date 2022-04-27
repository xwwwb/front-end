import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";

let routes =
  [{
    path: '/about',
    element: <About />
  }, {
    path: '/home',
    element: <Home />
  }, {
    path: '/',
    element: <Navigate to={"/about"} />
  }
  ]

export default routes;
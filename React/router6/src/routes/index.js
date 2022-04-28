import About from "../pages/About";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import News from "../pages/News";
import { Navigate } from "react-router-dom";
 
let routes =
  [{
    path: '/about',
    element: <About />
  }, {
    path: '/home',
    element: <Home />,
    children: [{
      path: 'messages',
      element: <Messages />
    }, {
      path: 'news',
      element: <News />
    }]
  }, {
    path: '/',
    element: <Navigate to={"/about"} />
  }
  ]

export default routes;
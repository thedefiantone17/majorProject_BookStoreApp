import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Login from "../../src/components/Login.jsx"
import Register from "../../src/components/Register.jsx"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/orders",
            element: <h1>orders</h1>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        }
    ]
    },
  ]);

  export default router;
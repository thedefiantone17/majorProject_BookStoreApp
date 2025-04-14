import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Cart from "../pages/books/Cart.jsx";
import Login from "../../src/components/Login.jsx"
import Register from "../../src/components/Register.jsx"
import Checkout from "../pages/books/Checkout.jsx";

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
            path: "/cart",
            element: <Cart/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/checkout",
            element: <Checkout/>
        }
    ]
    },
  ]);

  export default router;
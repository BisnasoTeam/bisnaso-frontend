import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import SignUp from "../Page/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/signUp',
            element:<SignUp/>
        }
    ],
  },
]);

export default router;

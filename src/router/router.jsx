import {
  createBrowserRouter,
} from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts,
    children: [
        {
            index:true,
            Component:Home
        },
        {
            path:'register',
            Component:Register
        },
        {
            path:'signIn',
            Component:SignIn
        },
    ]
  },
]);

export default router;
import {
  createBrowserRouter,
} from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import Apply from "../pages/apply/Apply";
import PrivateRoutes from "../routes/PrivateRoutes";
import MyApplication from "../pages/myApplication/MyApplication";

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
           path:'jobDetails/:id',
           loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
           Component:JobDetails
        },
        {
          path:'apply/:id',
          element:<PrivateRoutes><Apply></Apply></PrivateRoutes>
        },
        {
          path:'myApplication',
          element:<PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>
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
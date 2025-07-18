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
import JobPost from "../pages/jobPost/JobPost";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

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
           loader: ({params})=> fetch(`https://job-portal-server-seven-iota.vercel.app/jobs/${params.id}`),
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
          path:'applications/:id',
          element:<PrivateRoutes><ViewApplications></ViewApplications></PrivateRoutes>,
          loader: ({params}) => fetch(`https://job-portal-server-seven-iota.vercel.app/applications/jobs/${params.id}`)
          
        },
        {
          path:'myPostedJobs',
          element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
        },
        {
          path:'jobPost',
          element:<PrivateRoutes><JobPost></JobPost></PrivateRoutes>
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
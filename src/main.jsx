import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import ErrorMassage from './Component/ErrorMassage/ErrorMassage';
import JobDetails from './Component/JobDeatails/JobDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorMassage></ErrorMassage>,
    children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/applied',
          loader:()=>fetch('jobs.json'),
          element:<AppliedJobs></AppliedJobs>
        },
        {
          path:'/job/:id',
          loader:()=>fetch('jobs.json'),
          element:<JobDetails></JobDetails>

        }



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

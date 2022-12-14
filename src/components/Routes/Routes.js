import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Blog from "../Pages/Blog/Blog";
import Course from "../Others/Course/Course";
import CheckOut from "../Others/CheckOut/CheckOut";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Others/ErrorPage/ErrorPage";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:() => fetch('https://server-side-lyart.vercel.app/details')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/course/:id',
                element:<Course></Course>,
                loader:({params})=> fetch(`https://server-side-lyart.vercel.app/course/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params})=> fetch(`https://server-side-lyart.vercel.app/details/${params.id}`)
               
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    { path: "*", element: <ErrorPage></ErrorPage> },
]);
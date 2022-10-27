import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Blog from "../Pages/Blog/Blog";
import Course from "../Course/Course";
import Details from "../Deatails/Details";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                loader:() => fetch('http://localhost:5000/details')
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
                loader:({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
               
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
    }
]);
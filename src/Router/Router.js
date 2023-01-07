import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogIn from '../Pages/Authorize/LogIn';
import Register from '../Pages/Authorize/Register';
import About from '../Pages/Home/About';
import Blogs from '../Pages/Home/Blogs';
import Contact from '../Pages/Home/Contact';
import Home from '../Pages/Home/Home';
import MyProject from '../Pages/Home/MyProject';
import Main from '../Pages/Layout/Main';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element: <Home></Home>
                },{
                    path: '/about',
                    element:<About></About>
                },{
                    path:'/project',
                    element:<MyProject></MyProject>
                },{
                    path:'/contact',
                    element:<Contact></Contact>
                },{
                    path:'/login',
                    element:<LogIn></LogIn>
                },
                {
                    path:'/signup',
                    element:<Register></Register>
                },
                {
                    path:'/blogs',
                    element:<Blogs></Blogs>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;
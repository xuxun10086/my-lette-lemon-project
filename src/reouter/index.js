import {createBrowserRouter} from "react-router-dom";
import Homepage from "../pages/home/HomePage";
import Layout from "../pages/Layout";
import About from "../pages/about/About";
import BookingPage from "../pages/Booing/BookingPage";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Confirmation from "../pages/confirmation/Confirmation";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
            index:true,
            element:<Homepage/>},
            {
            path:'/about',
            element:<About/>},
            {
            path:'/reservations',
            element:<BookingPage/>},
            {
            path:"/order",
            element:<Order/>},
            {
            path:'/login',
            element:<Login/>
            },{
            path:'/confirmation',
            element:<Confirmation/>
            }
        ]
    }
])

export default router
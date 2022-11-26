import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddAdvertisement from "../pages/Dashboard/AddAdvertisement/AddAdvertisement";
import MyAdvertisements from "../pages/Dashboard/MyAdvertisements/MyAdvertisements";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/Shared/PageNotFound/PageNotFound";
import Signup from "../pages/Signup/Signup";






const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>

            }, 
            {
                path: '/login', 
                element: <Login></Login>

            },
            {
                path: '/signup', 
                element: <Signup></Signup>
            }
        ]
    }, 
    {
        path: '/dashboard', 
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard',
                element: <MyAdvertisements></MyAdvertisements>
            },
            {
                path: '/dashboard/addAdvertisement',
                element: <AddAdvertisement></AddAdvertisement>
            }
        ]
    },
    {
        path: '*', 
        element: <PageNotFound></PageNotFound>
    }
])


export default router;
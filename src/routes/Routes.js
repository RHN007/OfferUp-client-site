import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddCart from "../pages/Advertisements/AddCart";
import Advertisements from "../pages/Advertisements/Advertisements";
import AddAdvertisement from "../pages/Dashboard/AddAdvertisement/AddAdvertisement";
import AdvertisedItems from "../pages/Dashboard/AdvertisedItems/AdvertisedItems";
import AllUsers from "../pages/Dashboard/Dashboard/AllUsers/AllUsers";
import ManageAd from "../pages/Dashboard/ManageAd/ManageAd";
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
            },
            {
                path: '/category',
                element: <Advertisements/> 

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
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addAdvertisement',
                element: <AddAdvertisement></AddAdvertisement>
            },
            {
                path: '/dashboard/manageAd',
                element: <ManageAd></ManageAd>
            },
       
        ]
    },
    {
        path: '*', 
        element: <PageNotFound></PageNotFound>
    }
])


export default router;
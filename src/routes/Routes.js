import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Advertisements from "../pages/Advertisements/Advertisements";
import Blogs from "../pages/Blogs/Blogs";
import AddAdvertisement from "../pages/Dashboard/AddAdvertisement/AddAdvertisement";
import AdvertisedItems from "../pages/Dashboard/AdvertisedItems/AdvertisedItems";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyWishList from "../pages/Dashboard/MyWishList/MyWishList";
import ManageAd from "../pages/Dashboard/ManageAd/ManageAd";
import MyAdvertisements from "../pages/Dashboard/MyAdvertisements/MyAdvertisements";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";
import Payment from "../pages/Dashboard/Payment/Payment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/Shared/PageNotFound/PageNotFound";
import Signup from "../pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoutes/AdminRoute";
// import AddCart from "../pages/Advertisements/AddCart";






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

            },{
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signup', 
                element: <Signup></Signup>
            },
            {
                path: '/category',
                element: <Advertisements/> 
            },
            {
                path: '/blogs', 
                element: <Blogs></Blogs>
            },
         
        ]
    }, 
    {
        path: '/dashboard', 
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path:'/dashboard',
                element: <MyAdvertisements></MyAdvertisements>
            },
            {
                path: '/dashboard/bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addAdvertisement',
                element: <AddAdvertisement></AddAdvertisement>,
                loader: () => fetch('https://server-sooty-five.vercel.app/users')
            },
            {
                path: '/dashboard/userAd', 
                element: <AdvertisedItems></AdvertisedItems>
            },
            {
                path: '/dashboard/manageAd',
                element:  <AdminRoute><ManageAd></ManageAd></AdminRoute>
            },
            {
                path: '/dashboard/wishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://server-sooty-five.vercel.app/bookings/${params.id}`)
            },
          
       
        ]
    },
    {
        path: '*', 
        element: <PageNotFound></PageNotFound>
    }
])


export default router;
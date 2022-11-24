import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
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
        path: '*', 
        element: <PageNotFound></PageNotFound>
    }
])


export default router;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../pages/Shared/Loading/Loading';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
       <Loading></Loading>
    }
    const location = useLocation()
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
   }
   return children
};



export default PrivateRoutes;
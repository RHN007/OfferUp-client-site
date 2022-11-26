import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/OfferUp-Logo-1.png'
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><NavLink className='rounded-xl' to="/about">About</NavLink></li>
        {user?.uid ?
            <>  
             {user?.photoURL ? 
            <img className='h-12'  src={user?.photoURL} alt="userImage" />
            : <FaUser></FaUser>  }
           <p className='ml-2'>{user?.displayName}</p>
            <li className='font-semibold'><NavLink to='/dashboard'>Dashboard</NavLink></li>
              <NavLink className='font-semibold'><button className='btn-ghost' onClick={handleLogOut} >SignOut</button></NavLink>

          </> 
            : <li><NavLink className='rounded-xl' to="/login">Login</NavLink></li>}
    </React.Fragment>

    const subItems = <>
         <li ><NavLink className= ' rounded-xl text-black ' to="/yamaha">Yamaha</NavLink></li>
         <li ><NavLink className='rounded-xl text-black ' to="/honda">Honda</NavLink></li>
         <li ><NavLink className='rounded-xl text-black ' to="/suzuki">Suzuki</NavLink></li>
    </>

    return (
        <div className="navbar rounded bg-primary  flex justify-between md:text-accent  uppercase font-bold sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        
                    <li ><NavLink className='rounded-xl ' to="/">Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink className="justify-between rounded-xl" to="/category">
                               Advertisement
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </NavLink>
                            <ul className="p-2">
                               {subItems}
                            </ul>
                        </li>
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" > <img src={logo} className="rounded-2xl ml-5" width={156} alt="" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li ><NavLink className='rounded-xl ' to="/">Home</NavLink></li>
                    <li tabIndex={0}>
                    <NavLink className="justify-between rounded-xl" to="/category">
                                advertisements
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </NavLink>
                        <ul className="p-2">
                        {subItems}
                        </ul>
                    </li>
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
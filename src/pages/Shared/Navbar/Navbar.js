import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/OfferUp-Logo-1.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li ><NavLink  className='rounded-xl ' to="/">Home</NavLink></li>
        <li><NavLink  className='rounded-xl ' to="/products">Products</NavLink></li>
        <li><NavLink  className='rounded-xl' to="/about">About</NavLink></li>
        {user?.uid ?
            <>
                <li><NavLink  className='rounded-xl' to="/dashboard">Dashboard</NavLink></li>
                <li><button onClick={handleLogOut}>SIGN OUT</button></li>
            </>
            : <li><NavLink  className='rounded-xl' to="/login">Login</NavLink></li>}
    </React.Fragment>

    return (
        <div className="navbar bg-primary rounded-xl flex justify-between text-accent  uppercase font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link  to="/" > <img src={logo} className="rounded-2xl ml-5" width={156}  alt="" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
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
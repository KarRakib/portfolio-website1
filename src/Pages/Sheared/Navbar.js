import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';

const Navbar = () => {
    const {user} =useContext(authContext)
    const navItems = <React.Fragment>

        <li><Link to='/'> Home </Link> </li>
        <li><Link to='/about'> About </Link> </li>
        <li><Link to='/project'> Project </Link> </li>
        <li><Link to='/login'> Log In </Link> </li>
        <li><Link to='/contact'> Contact </Link> </li>
        {user.name}
    </React.Fragment>
    return (
        <div className="navbar text-white md:w-[1200px] fixed-top mx-auto lg:w-[1600px] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className='w-12 rounded-full' src="https://i.ibb.co/L0zJ28J/web-developer.jpg" alt="" srcSet="" />
                <div>
                    <Link className="btn btn-ghost normal-case text-xl">Web-Developer</Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
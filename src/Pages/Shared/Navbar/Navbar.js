import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon,faPhone} from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const menuItems = <React.Fragment>
     <li className='font-bold'><Link to='/contactAdd'>Add Contact</Link></li>
    <li className='font-bold'><Link to='/contactlist'>Contact List</Link></li>
    <li className='font-bold'><Link to='/contactinfo'>Contact Info</Link></li>

</React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {menuItems}
                    </ul>
                </div>
                <div className='flex'>
                <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <Link to='/contactlist' className="btn btn-ghost normal-case text-xl">Contact Manager</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
           
          
        </div>
            
        </div>
    );
};

export default Navbar;
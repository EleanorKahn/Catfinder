import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 text-white">
        <h1 className='flex-1'>
            <NavLink to="/">Catfinder</NavLink>
        </h1>
        <ul className='flex flex-nowrap flex-1 items-center justify-evenly'>
            <li className="">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
                <NavLink to="/catfinder">Search</NavLink>
            </li>
        </ul>
    </nav>
);
};

export default HeaderComponent;
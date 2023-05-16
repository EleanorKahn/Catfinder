import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full text-white pl-4 py-4 font-barlow">
        <h1 className='flex-1 font-extrabold'>
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
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
        <h1 className='text-sky-400'>Catfinder</h1>
        <ul className='flex flex-wrap items-center justify-around'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/catfinder">Search</NavLink>
            </li>
        </ul>
    </nav>
);
};

export default HeaderComponent;
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="bg-green-400 text-darkDesaturatedCyan">
        <h3 className='text-center font-bold text-lg'>Catfinder</h3>
        <ul className='flex flex-wrap self-center justify-center'>
            <li className='mr-10'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/catfinder">Search</NavLink>
            </li>
        </ul>
    </div>
  );
};

export default FooterComponent;
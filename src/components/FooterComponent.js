import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="bg-mutedCyan text-darkDesaturatedCyan">
        <h3 className='text-center font-bold'>Catfinder</h3>
        <ul className='flex flex-wrap self-center justify-evenly'>
            <li className=''>
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
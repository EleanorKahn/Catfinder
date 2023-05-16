import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div>
        <h3 className='text-center'>Catfinder</h3>
        <ul className='flex flex-wrap justify-center self-center'>
            <li className='mr-2'>
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
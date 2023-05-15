import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div>
        <h3>Catfinder</h3>
        <ul>
            <li>
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
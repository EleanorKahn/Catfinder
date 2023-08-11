import React from 'react';
import { NavLink } from 'react-router-dom';
//import catgreen from "../assets/images/cat-2605502.jpeg";

const HeaderComponent = () => {
  return (
    <div className='bg-[url("../assets/images/cat-2605502_1280(2).png")] h-96 bg-cover bg-center'>
        <nav className="flex flex-wrap items-center justify-between w-full text-white px-8 pt-4 mb-8 font-barlow">
            <h1 className='flex-1 font-extrabold'>
                <NavLink to="/">Catfinder</NavLink>
            </h1>
            <ul className='flex flex-nowrap flex-1 items-center justify-end'>
                <li className="mr-6 nav-link">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/catfinder">Search</NavLink>
                </li>
            </ul>
        </nav>
        <h2 className="mb-4 text-center text-white font-fraunces text-5xl font-bold cat-header">Adopt, Don&apos;t Shop</h2>
    </div>
    );
};

export default HeaderComponent;
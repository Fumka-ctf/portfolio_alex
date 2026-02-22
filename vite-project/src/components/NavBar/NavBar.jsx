import React, {useState} from 'react';
import Stiles from './NavBar.module.css';
import logo from '../../assets/img/logo.png';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <div className='p-15 mt-5 mb-5 flex flex-row  h-15 w-full 1 text-(--m-color) justify-center items-center font-bold text-3xl'>
                <Link className="bg-(--white) rounded-full p-1" to='/'>
                    <img className="w-14 " src={logo} alt="logo" />
                </Link>
                <nav className='flex justify-baseline bg-(--white) mr-auto w-auto h-15 rounded-full ml-10 '>
                    <NavLink to="/main" className="ml-8 m-auto">
                        <h1 className='m-auto'>main</h1>
                    </NavLink>
                    <NavLink to="/about" className="ml-8 m-auto">
                        <h1 className='m-auto'>about me</h1>
                    </NavLink>
                    <NavLink to="/project" className="ml-8 m-auto">
                        <h1 className='m-auto'>project</h1>
                    </NavLink>
                    <NavLink to="/prices" className="ml-8 mr-8 m-auto">
                        <h1 className='m-auto'>prices</h1>
                    </NavLink>
                </nav>

            </div>
        </>

    );
};

export default NavBar;
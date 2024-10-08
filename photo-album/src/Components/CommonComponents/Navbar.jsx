import React from 'react';
import './Navbar.css'
import ub_logo from '../Assets/ublogo.png'
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
        theme === 'light'? setTheme("dark"): setTheme("light");
    }
    return (
        <div className="navbar">
            <img src={ub_logo} alt="" className="logo"/>
            <h1>University of Batangas</h1>
            <IoPersonCircleOutline className="profile_icon"/>
        </div>
    );
};

export default Navbar;

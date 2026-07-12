import "./NavbarStyles.css";
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click_hamburger,setClick] = useState(true);
    const whenClicked = () => setClick(!click_hamburger);

    const [color,setColor] = useState(false);
    useEffect(() => {
        const changeColor = () => setColor(window.scrollY >= 100);
        changeColor();
        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener("scroll", changeColor);
    }, []);

  return (
    <div className={color? "Header Header-background": "Header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click_hamburger? "NavigationMenu":"NavigationMenu active"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Project">Projects</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className="Hamburger" onClick={whenClicked}>
            {click_hamburger ?(<FaBars size={20} style={{color: "#fff" }}/>)
            : (<FaTimes size={20} style={{color: "#fff" }}/>)}
            
        </div>
    </div>
  )
}

export default Navbar
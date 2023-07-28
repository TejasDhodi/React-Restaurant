import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import AboutUs from './AboutUs'
import "./style.css"
import"./media.css"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const ham = () => setShowNav(!showNav)
    const [about, setAbout] = useState(false);
    const showabout = () => {
        setAbout(true)
    }
    return (
        <>
            <nav className="navbar">
                <div className="nav_brand">
                    <img src="Images/logo1.png" alt="" />
                </div>
                <ul className={showNav ? "nav_items toggleHamb" : "nav_items"}>
                    <li className="nav_list">
                        <NavLink className="nav_link" onClick={ham} to="/" >Home</NavLink>
                    </li>
                    <li className="nav_list">
                        <NavLink className="nav_link" onClick={ham} to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="event" spy={true} smooth={true} offset={-10} duration={500} onClick={ham}>Event</Link>
                    </li>
                    <li className="nav_list">
                        <NavLink className="nav_link" onClick={showabout} >About</NavLink>
                    </li>
                    <li className="nav_list">
                        <NavLink className="nav_link" onClick={ham} to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="book_btn">
                    <NavLink to="/contact" className='btn'><button>Book Table</button></NavLink>
                </div>
                <div className={showNav ? "hamburger_menu toggleHamb": "hamburger_menu"} onClick={ham}>
                    <div className="line" id="line1"></div>
                    <div className="line" id="line2"></div>
                    <div className="line" id="line3"></div>
                </div>
            </nav>

            <AboutUs about={about} setAbout={setAbout}/>
        </>
    )
}

export default Navbar

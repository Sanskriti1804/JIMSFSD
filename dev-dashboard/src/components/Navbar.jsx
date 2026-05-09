import { useState } from "react"
import {FaSun, FaMoon} from "react-icons/fa"

function Navbar({darkmode, setDarkMode}){
    
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        <button
        className="theme-toggle"
         onClick={() => setDarkMode(!darkmode)}
         >
            {darkmode ? <FaSun/> : <FaMoon/>}
         </button>
         </nav>
    )
}

export default Navbar
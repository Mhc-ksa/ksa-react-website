import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import {Button} from "../Button"
import "./Navbar.css"

function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }


    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">KSA<i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={isClicked? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isClicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
            <Button>Join Us</Button>
        </nav>

    )
}

export default Navbar
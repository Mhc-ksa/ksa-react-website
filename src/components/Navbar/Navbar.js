import React from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import "./Navbar.css"

function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }

    return(
        <nav className="NavbarItems">
            <a className="navbar-logo" href={window.location.origin}>KSA<i className="fab fa-react"></i></a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={isClicked? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isClicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) => {
                    if (item.title === "Kulture") {
                        return(
                            <div class="dropdown">
                                <button class="dropbtn">Kulture</button>
                                <div class="dropdown-content">
                                    <a href="/kslang">K-slang</a>
                                    <a href="/kfood">K-food</a>
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
            <Button>Join Us</Button>
        </nav>

    )
}

export default Navbar
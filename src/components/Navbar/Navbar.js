import React from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import "./Navbar.css"

function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }

    const [isKultureClicked, setIsKultureClicked] = React.useState(false)

    function handleKultureClick () {
        setIsKultureClicked(!isKultureClicked)
    }

    return(
        <nav className="NavbarItems">
            <a className="navbar-logo" href={window.location.origin}>MHC KSA<i className="fab fa-react"></i></a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={isClicked? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isClicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) => {
                    if (item.title === "Kulture") {
                        return(
                            <div className="dropdown">
                                <button className="dropbtn" onClick={handleKultureClick}>Kulture</button>
                                <div className={isKultureClicked ? "mobile-kulture-clicked" : "dropdown-content"} >
                                    <div className='flex column font-l'>
                                        <a className="mobile-nav-dropdown-font" href="/kslang">K-slang</a>
                                        <a className='margin-top-12px mobile-nav-dropdown-font' href="/kfood">K-food</a>
                                    </div>

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
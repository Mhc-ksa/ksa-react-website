import React from 'react'
import "./Footer.css"

function Footer() {
    const currDate = new Date();
    const currYear = currDate.getFullYear();

    return(
        <footer className="footer">
            <p>Author: Hejin Jeong, Joeun Park</p>
            <p>copyright @ {currYear}</p>
        </footer>
    )
}

export default Footer
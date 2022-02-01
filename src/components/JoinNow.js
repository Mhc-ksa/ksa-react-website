import React from 'react'
import './JoinNow.css'

function JoinNow() {
    return (
        // TODO: change to sign up link
        <div className="flex container-join-now align-center ">
            <div>
                <input className="font-m gray join-now-input" placeholder="Enter your email adress" />
            </div>
            <div className="btn-join-now font-m">
                <a href="https://www.instagram.com/mhcksa/" className="atag-link-to-join"><p>Join Now</p></a>
            </div>
        </div>
)
}

export default JoinNow
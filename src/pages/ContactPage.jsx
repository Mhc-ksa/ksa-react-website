import React from 'react'
import './ContactPage.css'

function ContactPage() {
    return (
        <div className='padding-top-80 contact-page-out'>
            <div className='contact-page-in'>
                <div className='contact-form'>
                    <h1>Contact Us</h1>
                    <form>
                        <input className='input-contact' name="name" placeholder='Name' />
                        <input className='input-contact' name="email" placeholder='Email' />
                        <textarea className='input-contact text-input-contact' name="message" placeholder='Message' />
                        <button className="button-contact">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
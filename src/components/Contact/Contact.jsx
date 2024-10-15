import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='formCon'> 
        <h2>Contact Us</h2>
        <form className='form'>
            <div className="formGroup">
                <label htmlFor="fName">Full Name</label>
                <input type="text" name="name" id="name" placeholder="eg: John Doe"/>
            </div>

            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="email@address.com"/>
            </div>

            <div className="formGroup">
                <label htmlFor="msg">Message field</label>
                <textarea name="msg" id="msg" placeholder="Send Message"></textarea>
            </div>
            
            <button className='submitBtn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
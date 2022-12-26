import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div name="contact" className='ContactWrep'>
      <div className='ContactTitle'>
        <h1>Contact</h1>
        <p>Submit the form below to get touch with me</p>
      </div>

      <div className='ContactForm'>
        <form action="https://getform.io/f/8904d217-2f6a-4311-a35c-3d56ae444fe9" method="POST">
            <input type="text" name="name" placeholder='Enter your name'/>
            <input type="text" name="email" placeholder='Enter your email'/>
            <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="10"></textarea>
            <button><b>Let's talk</b></button>
        </form>
      </div>
    </div>
  )
}

export default Contact;

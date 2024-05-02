import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    // Function to handle form submission
    const sendEmail = (e) => {
        e.preventDefault();  // Prevents the default form submission behavior

        emailjs.sendForm('service_hxt5i5c', 'template_dla5xjm', e.target, 'tEFt18kJbKWopl-iQ')
            .then((result) => {
                console.log(result.text);
                alert('Email successfully sent!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again later.');
            });

        e.target.reset();  // Resets the form after submission
    };

    return (
        <div className='contacts-container'>
            <h1 id='contacts-header'>CONTACT</h1>
            <form id="emailForm" onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}

export default Contact;

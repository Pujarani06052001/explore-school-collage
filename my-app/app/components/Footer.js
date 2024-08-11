"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic checks for letters, numbers, and special characters
    const hasLetter = email.split('').some(char => char.match(/[a-zA-Z]/));
    const hasNumber = email.split('').some(char => char.match(/[0-9]/));
    const hasSpecialChar = email.split('').some(char => "!@#$%^&*()_+{}[]:;'<>,.?/~".includes(char));

    if (hasLetter && hasNumber && hasSpecialChar) {
      alert('You have been subscribed!');
      setEmail('');
    } else {
      alert('Please enter an email address with letters, numbers, and special characters.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get updated about admission forms, deadlines and articles to help you through the process.</p>
            <form onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter email here..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              <button className='suscribe' type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-links">
            <h3>Important Links</h3>
            <ul>
              <li><a href="#">Schools in India</a></li>
              <li><a href="#">Other Schools in India</a></li>
              <li><a href="#">Colleges in India</a></li>
              <li><a href="#">Advertise With Us</a></li>
              <li><a href="#">Common Admissions</a></li>
              <li><a href="#">Edunify India</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">CGPA Converter</a></li>
              <li><a href="#">Uniform Application by Edunify</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright : Uniform Ventures Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;

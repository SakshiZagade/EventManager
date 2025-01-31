
import React, { useState } from "react";
import "./Update.css"; // Importing external CSS file
import { FaAddressCard } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing social media icons



 // Importing external CSS file

const Update = () => {
    console.log("in update")
  

    return (
        <>
        <div className="container">
            {/* Left Side */}
            <div className="lside">
                <div className="reach">
                    <h2>Contact Us</h2>
                    <p>Get in touch with us for all your event planning needs – we're here to make your event a success!</p>

                    <div className="address">
                        <div className="icon">
                            <i className="fa-sharp fa-solid fa-location-dot"><FaAddressCard /></i>
                        </div>
                        <p>
                            New company 1212 1st floor
                            <br />
                            Street Delhi, India
                        </p>
                    </div>

                    <div className="address line">
                        <div className="icon" >
                            <i className="fa-solid fa-phone"><IoMdContact /></i>
                        </div>
                        <p>+91 004-054-05656</p>
                    </div>

                    <div className="address line">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"><CgWebsite /></i>
                        </div>
                        <p>www.TechEvent2025.com</p>
                    </div>

                    <div className="address line">
                        <div className="icon">
                            <i className="fa-sharp fa-solid fa-globe"><MdEmail /></i>
                        </div>
                        <p>TechEvent2025@gmail.com</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="rside">
                <form>
                    <div className="git">
                        <h2>Get In Touch</h2>
                    </div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" placeholder="Enter your name" required />
                    <br />

                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" placeholder="Enter your email" required />
                    <br />

                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea rows="6" placeholder="Enter your message"></textarea>
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
        
    );
};

export default Update;


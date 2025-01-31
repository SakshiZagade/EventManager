import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import './Register.css';

const Register = () => {
    console.log("in the update");
     const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <>
        <div className="rbody">
            <div className="title">
            <h1>Register</h1>
            </div>
              <button className="home-btn" onClick={() => navigate("/Home")}>
                <FaHome size={24} /> Home
              </button>
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required />

                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="contact">Contact Number:</label>
                    <input type="tel" id="contact" name="contact" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        
        </>
    );
};

export default Register;

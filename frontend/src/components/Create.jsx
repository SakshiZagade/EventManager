import React, { useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import axios from "axios"; // Import Axios

const Create = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const navigate = useNavigate();

  // ✅ **Fix: Ensure function is defined**
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("eventName", eventName);
    formData.append("eventDate", eventDate);
    formData.append("location", location);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/events", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201) {
        alert("Event created successfully!");
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
    <div className="body">
    <div className="heading">
        <h2>Create Event</h2>
      </div>

      {/* Home Icon Button */}
      <button className="home-btn" onClick={() => navigate("/Home")}>
        <FaHome size={24} /> Home
      </button>

      <div className="card-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Event</label>
            <input type="text" id="name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>

          {/* ✅ Image Upload Section (Fixed) */}
          <div className="form-group">
            <label htmlFor="image">Event Image</label>
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} required />
          </div>

          {/* ✅ Display Image Preview */}
          {imagePreview && (
            <div className="image-preview">
              <p>Image Preview:</p>
              <img src={imagePreview} alt="Event Preview" />
            </div>
          )}

          <button type="submit" className="create-btn">Create Event</button>
        </form>
      </div>

    </div>
      
    </>
  );
};

export default Create;

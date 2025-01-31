import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import Home Icon
import axios from "axios"; // Import axios to fetch data
import "./Event.css";

const Event = () => {
  const [events, setEvents] = useState([]); // State to hold event data
  const navigate = useNavigate();

  // Fetch events from the database when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((response) => {
        console.log(response.data); // Log the response to check the image URLs
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <>
    <div className="body">
        <div className="event-container">
      {/* Home Icon Button */}
      <button className="home-btn" onClick={() => navigate("/Home")}>
        <FaHome size={24} /> Home
      </button>

      <h1 className="event-title">Explore Events</h1>

      <div className="event-grid">
        {events.length > 0 ? (
          events.map((event) => {
            // Ensure event.image is not null or undefined before replacing backslashes
            const imageUrl = event.image ? event.image.replace(/\\/g, "/") : "";

            return (
              <div className="event-card" key={event._id}>
                {imageUrl && (
                  <img
                    src={`http://localhost:5000/${imageUrl}`}
                    alt={event.eventName}
                    className="event-image"
                  />
                )}
                <div className="event-info">
                  <h3 className="event-name">{event.eventName}</h3>
                  <p className="event-description">{event.description}</p>
                  <p className="event-location">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="event-date">
                    <strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading events...</p>
        )}
      </div>
    </div>
    </div> 
    </>
    
  );
};

export default Event;
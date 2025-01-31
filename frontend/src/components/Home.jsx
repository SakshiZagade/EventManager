import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // Import Carousel
import { FcCalendar } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaChevronUp } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [events, setEvents] = useState([]); // Fetch events from backend

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      console.log(res.data); // Debug API response
      setEvents(res.data); // Update state with API data
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter events based on search
  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body">
      {/* Navbar */}
      <div className="navbar">
        <h1>EventManager</h1>
        <div className="nav-links">
          <a href="Home">Home</a>
          <a href="Event">Events</a>
          <a href="Update/:id">Contact</a>
        </div>
      </div>
      <br></br>
      {/* Search & Calendar */}
      <div className="search-calendar-container">
        
        <input type="text" placeholder="Search Events..." value={searchTerm} onChange={handleSearch} />
        <button className="Calendar" onClick={handleCalendarClick}>
          <FcCalendar size={20} />
        </button>
        <span className="selected-date">{selectedDate.toLocaleDateString("en-GB")}</span>
        {showCalendar && <Calendar onChange={handleDateChange} value={selectedDate} />}
        <button className="search" onClick={() => navigate("/")}>
          Search <FaPlus size={10} />
        </button>

      </div>

      {/* Carousel Section */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="./Images/event-img1.jpg" alt="First slide" />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="./Images/event-img2.jpg" alt="Second slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="./Images/event-img3.jpg" alt="Third slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>

      <button className="add" onClick={() => navigate("/create")}>
          Add Event <FaPlus size={10} />
        </button>
      <br></br>
      {/* Event Cards */}
      <div className="event-cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="event-card" key={event._id}>
              <h3>{event.eventName}</h3>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {event.eventDate}</p>
              <div className="card-buttons">
                <button className="register-btn" onClick={() => navigate("/Register")}>Register</button>
                {/* <button className="view-btn" onClick={() => navigate("/Event")}>View Event</button> */}
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <div className="alert-box">No events found!</div>
          </div>
        )}
      </div>
      <br></br>
      <div className="shrink">
            <a className="learn-more px-5" href="/Event">View More</a>
          </div>
      <br></br>
        {/* ---Footer--- */}
      <div id="page-footer" className="py-2-bg-dark">
      <div className="brand">
        <a className="navbar-brand" href="/Home">EVENTS</a>
      </div>
      <div className="copyright">
        <small>
          <span>Copyright &copy;</span> <span>All Rights Reserved</span>
          <span>Terms of Use</span> and <span>Privacy Policy</span></small>
      </div>
      <br></br>


      <div className="favicon">
        <i className="social-media"><FaFacebookF size={25}/></i>
        <i className="social-media"><FaTwitter size={25} /></i>
        <i className="social-media"><FaInstagram size={25} /></i>
        <i className="social-media"><FaEnvelope size={25} /></i>
      </div>

      <div className="BackToTop">
        <a id="back-to-top" href="#" role="button">
          <i className="back"><FaChevronUp /></i>
        </a>
        <h4>Back To Top</h4>
      </div>
        
    </div>
      
    </div>
  );
};

export default Home;

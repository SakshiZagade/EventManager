const express = require('express');
const Event = require('../models/eventdb'); // Assuming you have an Event model
const router = express.Router();



// Get all events or a specific event by ID
router.get('/:id?', async (req, res) => {
  try {
    const { id } = req.params; // Check if an ID is passed

    if (id) {
      // If ID is provided, retrieve a specific event
      const event = await Event.findById(id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      return res.status(200).json(event);
    } else {
      // If no ID is provided, retrieve all events
      const events = await Event.find();
      return res.status(200).json(events);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving events', error: error.message });
  }
});



// Event creation route (POST)
router.post('/', async (req, res) => {
  try {
    const { eventName, eventDate, location, description } = req.body;
    const image = req.file ? req.file.path : null; // Handle the image file if it exists

    const newEvent = new Event({
      eventName,
      eventDate,
      location,
      description,
      image, // Store the image path in the database
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error: error.message });
  }
});

// Update an event by ID
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the event ID from the URL parameters
      const { eventName, eventDate, location, description } = req.body; // Get the updated event data from the body
  
      // Find and update the event
      const updatedEvent = await Event.findByIdAndUpdate(
        id,
        { eventName, eventDate, location, description },
        { new: true } // Return the updated document
      );
  
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      // If image is provided, update it
      if (req.file) {
        updatedEvent.image = req.file.path; // Update the image field if the new image is uploaded
        await updatedEvent.save();
      }
  
      res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
    } catch (error) {
      res.status(500).json({ message: 'Error updating event', error: error.message });
    }
  });

  // Delete an event by ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the event ID from the URL parameters
  
      // Find and delete the event
      const deletedEvent = await Event.findByIdAndDelete(id);
  
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.status(200).json({ message: 'Event deleted successfully', event: deletedEvent });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting event', error: error.message });
    }
  });
  


module.exports = router;


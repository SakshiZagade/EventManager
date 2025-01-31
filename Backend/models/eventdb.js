const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false }, // You can use String for storing image URLs or paths
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating our User model
const TripSchema = new Schema({
    // The email cannot be null, and must be a proper email before creation
    origin: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    // The password cannot be null
    numberOfPeople: {
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    departureDate: {
        type: String,
        required: true,
        trim: true
    },
    arrivalDate: {
        type: String,
        required: true,
        trim: true
    },
    tripName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    },
    currency: {
        type: String,
        trim: true
    },
    departureTime: {
        type: String,
        trim: true
    },
    arrivalTime: {
        type: String,
        trim: true
    },
    departureTime2: {
        type: String,
        trim: true
    },
    arrivalTime2: {
        type: String,
        trim: true
    },
    airlineDeparture: {
        type: String,
        trim: true
    },
    airlineArrival: {
        type: String,
        trim: true
    },
    checklist: [
        {
            type: Schema.Types.ObjectId,
            ref: "Baggage"
        }
    ]
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating our User model
const BaggageSchema = new Schema({
    // The email cannot be null, and must be a proper email before creation
    items: [String]

});

const Baggage = mongoose.model("Baggage", BaggageSchema);

module.exports = Baggage;
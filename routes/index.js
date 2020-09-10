const path = require("path");
const router = require("express").Router();
const AuthRoutes = require("./authorization/index");
const TripRoutes = require("./api/index");
const FlightRoutes = require("./flights");
const CitiesRoutes = require("./cities");
const BaggageRoutes = require("./baggage");

//Login/Signup Routes
router.use("/api", AuthRoutes);
//Trips Routes
router.use("/api", TripRoutes);
//Flight Routes
router.use("/api", FlightRoutes);
//Cities Routes
router.use("/api", CitiesRoutes);
//Bagge Routes
router.use("/api", BaggageRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;

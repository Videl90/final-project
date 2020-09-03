const router = require("express").Router();
const flightsRoutes = require("./flight");

router.use("/flightInfo", flightsRoutes);

module.exports = router;
const router = require("express").Router();
const baggageRoutes = require("./baggage");

router.use("/baggage", baggageRoutes);

module.exports = router;
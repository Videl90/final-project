const router = require("express").Router();
const citiesRoutes = require("./cities");

router.use("/cities", citiesRoutes);

module.exports = router;
const router = require("express").Router();
const citiesController = require("../../controllers/citiesController");

router.route("/allcities").get(citiesController.getCities);

module.exports = router;
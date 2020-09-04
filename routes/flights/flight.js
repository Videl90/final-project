const router = require("express").Router();
const amadeusController = require("../../controllers/amadeusController");

router.route("/flight").get(amadeusController.test);

module.exports = router;
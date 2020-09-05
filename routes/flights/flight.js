const router = require("express").Router();
const amadeusController = require("../../controllers/amadeusController");

router.route("/flight").post(amadeusController.test);

module.exports = router;
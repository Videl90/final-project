const router = require("express").Router();
const checklistController = require("../../controllers/checklistController");

router.route("/checklist").post(checklistController.checkList);

module.exports = router;
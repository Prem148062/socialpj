const getEdit = require("../controllers/profile/getEdit");
const getProfile = require("../controllers/profile/getProfile");
const updateProfile = require("../controllers/profile/updateProfile");
const authOnly = require("../middleware/authOnly");

const router = require("express").Router();

router.get("/edit", authOnly, getEdit);
router.get("/:username", authOnly, getProfile);
router.put("/", authOnly, updateProfile);

module.exports = router;

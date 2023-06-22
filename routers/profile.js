const getEdit = require("../controllers/profile/getEdit");
const updateProfile = require("../controllers/profile/updateProfile");
const authOnly = require("../middleware/authOnly");

const router = require("express").Router();

router.get("/edit", authOnly, getEdit);
router.put("/", authOnly, updateProfile);

module.exports = router;

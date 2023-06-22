const getLogin = require("../controllers/auth/getLogin");
const getLogout = require("../controllers/auth/getLogout");
const getRegister = require("../controllers/auth/getRegister");
const postLogin = require("../controllers/auth/postLogin");
const postRegister = require("../controllers/auth/postRegister");
const authOnly = require("../middleware/authOnly");
const guestOnly = require("../middleware/guestOnly");

const router = require("express").Router();
router.get("/login", guestOnly, getLogin);
router.get("/register", guestOnly, getRegister);
router.post("/login", guestOnly, postLogin);
router.post("/register", guestOnly, postRegister);

router.get("/logout", authOnly, getLogout);

module.exports = router;

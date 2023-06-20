const getLogin = require("../controllers/auth/getLogin");
const getRegister = require("../controllers/auth/getRegister");
const postLogin = require("../controllers/auth/postLogin");
const postRegister = require("../controllers/auth/postRegister");

const router = require("express").Router();

router.get("/login", getLogin);
router.get("/register", getRegister);
router.post("/login", postLogin);
router.post("/register", postRegister);

module.exports = router;

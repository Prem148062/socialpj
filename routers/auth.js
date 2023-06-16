const getLogin = require("../controllers/auth/getLogin");

const router = require("express").Router();

router.get("/login", getLogin);

module.exports = router;

const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

// memberga oid routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

// boshqa routerlar
router.get("/menu", (req, res) => {
    res.send("You are in Menu");
});

router.get("/community", (req, res) => {
    res.send("You are in Menu");
});

module.exports = router;
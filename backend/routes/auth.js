const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Registration Successful"
    });

});

router.post("/login", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Login Successful"
    });

});

module.exports = router;
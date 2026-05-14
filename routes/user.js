const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>User Page</h1>");
});

router.get("/info", (req, res) => {
    res.send("<h1>User Information Page</h1>");
});



router.get("/:id", (req, res) => {
    res.send("<h1>User ID: ${req.params.id}</h1>");
});

module.exports = router;

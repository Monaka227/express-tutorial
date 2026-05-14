const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
    res.send("<h1>User Page</h1>");
});

app.get("/info", (req, res) => {
    res.send("<h1>User Information Page</h1>");
});

module.exports = router;

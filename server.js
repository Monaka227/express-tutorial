const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("<h1>Hello World</h1>");
    // res.sendStatus(500);
    // res.status(500).send("Internal Server Error");
    // res.status(500).json({ message: "Internal Server Error" });
})

// routing
app.use("/user", userRouter);

app.listen(PORT, () => {console.log("Server is running on port ");
});
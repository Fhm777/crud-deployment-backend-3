const mongoose = require("mongoose");
const express = require("express");
const app = express();
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:123@cluster0.shnmruy.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/studentRoute", studentRoute)

app.listen(4000, () => {
    console.log("Server connected at 4000");
})
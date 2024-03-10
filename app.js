const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require('express-session');
var cookieParser = require('cookie-parser')
const moment = require("moment");
const path = require("path");
// ___________________Routers______________________

const detectiveChallengeRouter = require('./src/all-routes/detective-challenge')

// ___________________Routers______________________


// Register ejs view engine
app.set("view engine", "ejs");

// Register partials folder
app.set("partials", "../views")

// Register views folder
app.set("views", "views");

// Register static files css, javascript, images/pngs from public
app.use("/static", express.static("public"));


app.use(detectiveChallengeRouter);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is Running on port 3000");
});


const express = require("express");
const routes = express.Router();

const { currantWeek } = require("../../controller/detective-challenge/detective-challenge-dynamic-page");

routes.get("/detective-iq-challenges", currantWeek);

// ________________________________________________________________________________________________________________

module.exports = routes
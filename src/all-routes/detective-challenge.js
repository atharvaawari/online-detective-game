const express = require("express");
const routes = express.Router();

const { currantWeek } = require("../../controller/detective-challenge/detective-challenge-dynamic-page");
const { nextWeek } = require("../../controller/web-Games/mineswepper-game");

routes.get("/detective-iq-challenges", currantWeek);
routes.get("/mineswepper", nextWeek);

// ________________________________________________________________________________________________________________

module.exports = routes
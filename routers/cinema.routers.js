const { Router } = require("express");
const {
  getAll,
  getCinemasByCineplex,
  getQuery,
} = require("../controllers/cinema.controllers");
const cinemaRouter = Router();

cinemaRouter.get("/byCineplex/:id", getCinemasByCineplex);
cinemaRouter.get("/", getAll);
cinemaRouter.get("/query", getQuery);
module.exports = {
  cinemaRouter,
};

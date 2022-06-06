module.exports = app => {
  const genres = require("../controllers/genre.controller.js");
  var router = require("express").Router();
  // Create a new Genre
  router.post("/", genres.create);
  // Retrieve all Genres
  router.get("/", genres.findAll);
  app.use('/api/genres', router);
};
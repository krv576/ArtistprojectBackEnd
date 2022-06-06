module.exports = app => {
  const genres = require("../controllers/genre.controller.js");
  var router = require("express").Router();
  // Create a new Genre
  router.post("/", genres.create);
  // Retrieve all Genres
  router.get("/", genres.findAll);
  // Update a Genre with id
  router.put("/:id", genres.update);
  app.use('/api/genres', router);
};
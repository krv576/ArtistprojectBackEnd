module.exports = app => {
  const genres = require("../controllers/genre.controller.js");
  var router = require("express").Router();
  // Create a new Genre
  router.post("/", genres.create);
  app.use('/api/genres', router);
};
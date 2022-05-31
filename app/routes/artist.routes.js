module.exports = app => {
  const artists = require("../controllers/artist.controller.js");
  var router = require("express").Router();
  // Create a new Artist
  router.post("/", artists.create);
  // Retrieve all Artists
  router.get("/", artists.findAll);
  // Retrieve a single Artist with id
  router.get("/:id", artists.findOne);
  // Retrieve all top Artists
  router.get("/top", artists.findAllTopArtists);
  // Update a Artist with id
  router.put("/:id", artists.update);
  app.use('/api/artists', router);
};
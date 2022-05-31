module.exports = app => {
  const artists = require("../controllers/artist.controller.js");
  var router = require("express").Router();
  // Create a new Artist
  router.post("/", artists.create);
  // Retrieve all top Artists
  router.get("/top", artists.findAllTopArtists);
  app.use('/api/artists', router);
};
module.exports = app => {
  const tracks = require("../controllers/track.controller.js");
  var router = require("express").Router();
  // Create a new Track
  router.post("/", tracks.create);
  // Retrieve all tracks
  router.get("/", tracks.findAll);
  // Retrieve all old melodies tracks
  router.get("/oldMelodies", tracks.findAllOldMelodies);
  // Retrieve a single Track with id
  router.get("/:id", tracks.findOne);
  app.use('/api/tracks', router);
};
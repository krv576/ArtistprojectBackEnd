module.exports = app => {
  const tracks = require("../controllers/track.controller.js");
  var router = require("express").Router();
  // Create a new Track
  router.post("/", tracks.create);
  // Retrieve all tracks
  router.get("/", tracks.findAll);
  // Retrieve all old melodies tracks
  router.get("/oldMelodies", tracks.findAllOldMelodies);
  // Retrieve all tracks by genre id
  router.get("/genre/:genreId", tracks.findAllTracksByGenre);
  // Retrieve all tracks by artist id
  router.get("/artist/:artistId", tracks.findAllTracksByArtist);
  // Retrieve all albums by album id
  router.get("/album/:albumId", tracks.findAllTracksByAlbum);
  // Retrieve a single Track with id
  router.get("/:id", tracks.findOne);
  // Update a Track with id
  router.put("/:id", tracks.update);
  // Delete a Track with id
  router.delete("/:id", tracks.delete);
  // Delete all tracks
  router.delete("/", tracks.deleteAll);
  app.use('/api/tracks', router);
};
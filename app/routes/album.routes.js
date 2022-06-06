module.exports = app => {
  const albums = require("../controllers/album.controller.js");
  var router = require("express").Router();
  // Create a new Album
  router.post("/", albums.create);
  // Retrieve all Albums
  router.get("/", albums.findAll);
  // Retrieve a single Album with id
  router.get("/:id", albums.findOne);
  app.use('/api/albums', router);
};
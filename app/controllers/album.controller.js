const db = require("../models");
const Album = db.albums;
// Create and Save a new Album
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.year || !req.body.year) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Album
  const album = {
    name: req.body.name,
    year: req.body.year,
    artistId: req.body.artistId,
    genreId: req.body.genreId
  };
  // Save Album in the database
  Album.create(album)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Album."
      });
    });
};
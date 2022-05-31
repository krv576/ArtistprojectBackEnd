const db = require("../models");
const Artist = db.artists;
// Create and Save a new Artist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Artist
  const artist = {
    name: req.body.name,
    top: req.body.top ? req.body.top : false
  };
  // Save Artist in the database
  Artist.create(artist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Artist."
      });
    });
};
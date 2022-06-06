const db = require("../models");
const Track = db.tracks;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.length || !req.body.fileName || !req.body.albumId || !req.body.artistId || !req.body.genreId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Track
  const track = {
    name: req.body.name,
    length: req.body.length,
    fileName: req.body.fileName,
    albumId: req.body.albumId,
    artistId: req.body.artistId,
    genreId: req.body.genreId,
    oldMelody: req.body.oldMelody ? req.body.oldMelody : false
  };
  // Save Track in the database
  Track.create(track)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Track."
      });
    });
};
// Retrieve all Tracks from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Track.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tracks."
      });
    });
};
// Find a single Track with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Track.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Track with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Track with id=" + id
      });
    });
};
const db = require("../models");
const Genre = db.genres;
const Op = db.Sequelize.Op;
// Create and Save a new Genre
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Genre
  const genre = {
    name: req.body.name
  };
  // Save Genre in the database
  Genre.create(genre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Genre."
      });
    });
};
// Retrieve all Genres from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Genre.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving genres."
      });
    });
};
const db = require("../models");
const Album = db.albums;
const Op = db.Sequelize.Op;
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
// Retrieve all Albums from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var conditionName = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const year = req.query.year;
  var conditionYear = year ? { year: { [Op.like]: `%${year}%` } } : null;
  let condition = null;
  if (conditionName && conditionYear) {
    condition = {[Op.or]: [conditionName, conditionYear]}
  } else if (conditionName) {
    condition = conditionName
  } else if (conditionYear) {
    condition = conditionYear;
  }
  Album.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving albums."
      });
    });
};
// Retrieve all Genre Albums from the database.
exports.findGenreAlbums = (req, res) => {
  const genreId = req.params.genreId;
  var conditionGenre = genreId ? { genreId: { [Op.like]: `%${genreId}%` } } : null;
  const name = req.query.name;
  var conditionName = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const year = req.query.year;
  var conditionYear = year ? { year: { [Op.like]: `%${year}%` } } : null;
  let condition = conditionGenre;
  if (conditionName && conditionYear) {
    condition = {[Op.and]: [conditionGenre, conditionName, conditionYear]}
  } else if (conditionName) {
    condition = {[Op.and]: [conditionGenre, conditionName]}
  } else if (conditionYear) {
    condition = {[Op.and]: [conditionGenre, conditionYear]}
  }
  Album.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving genre albums."
      });
    });
};
// Retrieve all Genre Albums from the database.
exports.findArtistAlbums = (req, res) => {
  const artistId = req.params.artistId;
  var conditionArtist = artistId ? { artistId: { [Op.like]: `%${artistId}%` } } : null;
  const name = req.query.name;
  var conditionName = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const year = req.query.year;
  var conditionYear = year ? { year: { [Op.like]: `%${year}%` } } : null;
  let condition = conditionArtist;
  if (conditionName && conditionYear) {
    condition = {[Op.and]: [conditionArtist, conditionName, conditionYear]}
  } else if (conditionName) {
    condition = {[Op.and]: [conditionArtist, conditionName]}
  } else if (conditionYear) {
    condition = {[Op.and]: [conditionArtist, conditionYear]}
  }
  Album.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artist albums."
      });
    });
};
// Find a single Album with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Album.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Album with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Album with id=" + id
      });
    });
};
// Update a Album by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Album.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Album was updated successfully."
        });
      } else {
        res.status(405).send({
          message: `Cannot update Album with id=${id}. Maybe Album was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Album with id=" + id
      });
    });
};
// Delete a Album with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Album.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Album was deleted successfully!"
        });
      } else {
        res.status(405).send({
          message: `Cannot delete Album with id=${id}. Maybe Album was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Album with id=" + id
      });
    });
};
// Delete all Albums from the database.
exports.deleteAll = (req, res) => {
  Album.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Albums were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all albums."
      });
    });
};
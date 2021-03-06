const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.artists = require("./artist.model.js")(sequelize, Sequelize);
db.genres = require("./genre.model.js")(sequelize, Sequelize);
db.albums = require("./album.model.js")(sequelize, Sequelize);
db.tracks = require("./track.model.js")(sequelize, Sequelize);

db.artists.hasMany(db.albums, {
  as: 'album'
});
db.albums.belongsTo(db.artists, {
  as: 'artist',
});

db.genres.hasMany(db.albums, {
  as: 'album'
});
db.albums.belongsTo(db.genres, {
  as: 'genre',
});


db.albums.hasMany(db.tracks, {
  as: 'track'
});
db.tracks.belongsTo(db.albums, {
  as: 'album',
});

db.artists.hasMany(db.tracks, {
  as: 'track'
});
db.tracks.belongsTo(db.artists, {
  as: 'artist',
});

db.genres.hasMany(db.tracks, {
  as: 'track'
});
db.tracks.belongsTo(db.genres, {
  as: 'genre',
});

module.exports = db;
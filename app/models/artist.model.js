module.exports = (sequelize, Sequelize) => {
  const Artist = sequelize.define("artist", {
    name: {
      type: Sequelize.STRING
    },
    top: {
      type: Sequelize.BOOLEAN
    }
  });
  return Artist;
};
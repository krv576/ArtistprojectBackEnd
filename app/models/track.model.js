module.exports = (sequelize, Sequelize) => {
  const Track = sequelize.define("track", {
    name: {
      type: Sequelize.STRING
    },
    length: {
      type: Sequelize.STRING
    },
    fileName: {
      type: Sequelize.STRING
    },
    oldMelody: {
      type: Sequelize.BOOLEAN
    }
  });
  return Track;
};
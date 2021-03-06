'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Song.belongsTo(models.Game);
        Song.hasMany(models.Sheet);
    }
  };
  Song.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    metadata: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};

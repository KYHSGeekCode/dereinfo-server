'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PullRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PullRequest.init({
    name: DataTypes.STRING,
    closed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PullRequest',
  });
  return PullRequest;
};
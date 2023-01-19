'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Historial.init({
    AccountId: DataTypes.INTEGER,
    owner: DataTypes.STRING,
    payments: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historial',
  });
  return Historial;
};
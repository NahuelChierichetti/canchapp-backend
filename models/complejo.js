'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Complejo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Complejo.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    duenoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Complejo',
  });
  return Complejo;
};
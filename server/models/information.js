'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Information.init({
    city: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    price: DataTypes.STRING,
    status: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize, 
    timestamps:false,
    modelName: 'Information',
  });
  return Information;
};
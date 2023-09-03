'use strict';
const {
  Model
} = require('sequelize');

const tableName = 'nuvertosCompounds';

module.exports = (sequelize, DataTypes) => {
  class compounds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  compounds.init({
    compoundName: {
      type: DataTypes.STRING,
      unique: true
    },
    compoundDescription: DataTypes.TEXT,
    compoundImage: DataTypes.STRING,
    dateModified: DataTypes.DATE
  }, {
    sequelize,
    modelName: tableName,
    timestamps: false
  });
  return compounds;
};
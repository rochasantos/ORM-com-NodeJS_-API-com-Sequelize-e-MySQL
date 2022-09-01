'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turma.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      });
      Turma.belongsTo(models.Pessoas)
      Turma.belongsTo(models.Niveis)
    }
  }
  Turma.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};
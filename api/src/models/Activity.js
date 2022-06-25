const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: [ "1", "2", "3", "4", "5"]
    },
    duration: {
        type: DataTypes.DECIMAL,
    },
    season: {
      type: DataTypes.ENUM,
      values: ['Summer', 'Fall', 'Winter', 'Spring']
    },
  },{
    timestamps: false
  }
  );
};
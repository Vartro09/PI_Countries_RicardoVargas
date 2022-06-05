const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: { 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: { 
      type: DataTypes.TEXT,
    },
    area: {
      type: DataTypes.DECIMAL,
      get(){
        return this.getDataValue("area") + " Km";
      } 
    },
    population: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false
  });
};

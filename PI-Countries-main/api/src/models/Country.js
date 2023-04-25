const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Desconocido'
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    
    timestamps: false});
};

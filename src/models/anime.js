const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anime', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    episodes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'anime',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anime_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

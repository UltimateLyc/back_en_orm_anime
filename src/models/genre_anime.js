import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Genre_Anime = sequelize.define('genre_anime', {
    id_anime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'anime',
        key: 'id'
      }
    },
    id_genre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genre',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'genre_anime',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genre_anime_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  })

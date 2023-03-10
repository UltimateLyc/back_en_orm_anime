import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Rating = sequelize.define('rating', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_anime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'anime',
        key: 'id'
      }
    },
    id_source: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'source_site',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rating',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rating_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  })

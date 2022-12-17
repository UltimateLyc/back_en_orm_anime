import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const Source_site = sequelize.define('source_site', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    source_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'source_site',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "source_site_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  })

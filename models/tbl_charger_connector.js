/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_charger_connector', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charger_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "id of charger table"
    },
    connector_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    connector_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    connector_voltage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    connector_amperage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    connector_maxpower: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_charger_connector',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

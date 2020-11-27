/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_charger', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charger_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    install_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ocpp_cb_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    station_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    site_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "id of the sites table"
    },
    charger_group: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "id of groups table"
    },
    charger_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    connector_numbers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charger_capability_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id of charger_cpability table"
    },
    charger_floor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activated: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 for on\/yes and 0 for off\/no"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "1 for on\/yes and 0 for off\/no"
    }
  }, {
    sequelize,
    tableName: 'tbl_charger',
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

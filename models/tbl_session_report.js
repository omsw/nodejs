/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_session_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    station_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    site_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    connector_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    energy_delivered: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    session_start: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    session_end: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    session_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pull_in_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pull_out_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    plugged_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customer_identifier: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_soc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    end_soc: {
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
    tableName: 'tbl_session_report',
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

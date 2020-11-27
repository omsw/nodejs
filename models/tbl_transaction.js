/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_transaction', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charger_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    connector_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    idtag: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    auth_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meter_start: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meter_stop: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_logdatetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    stop_logdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    plugin_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    plugout_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_soc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    end_soc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    max_energy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tbl_transaction',
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
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

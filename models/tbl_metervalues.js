/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_metervalues', {
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
      allowNull: true
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    soc_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soc_context: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soc_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soc_measurand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soc_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    soc_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy_context: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy_measurand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy2_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy3_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy3_context: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy3_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy3_measurand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy3_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy3_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy4_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy4_context: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy4_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy4_measurand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy4_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy4_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy5_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy5_context: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy5_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy5_measurand: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy5_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    energy5_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_metervalues',
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

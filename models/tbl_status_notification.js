/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_status_notification', {
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
    connector1_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    connector1_error_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    connector1_info: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    connector1_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    connector1_logdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    connector1_vendor_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    connector1_vendor_error_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    connector2_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    connector2_error_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    connector2_info: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    connector2_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    connector2_logdatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    connector2_vendor_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    connector2_vendor_error_code: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'tbl_status_notification',
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

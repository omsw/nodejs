/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sites', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    site_group: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    site_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    utility_transformer_capacity: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    utility_service_capacity: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    utility_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    meter_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_sites',
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

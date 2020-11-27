/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user_manage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dashboard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view_charger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 stands for cannot  1 for can do"
    },
    add_charger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    edit_charger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view_sites: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    add_site: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    edit_site: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view_site_region: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    add_site_region: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    edit_site_region: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view_site_division: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    add_site_division: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    edit_site_division: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    view_site_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    add_site_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    edit_site_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_user_manage',
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

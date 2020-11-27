/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_states', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tbl_states',
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

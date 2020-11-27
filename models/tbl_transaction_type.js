/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_transaction_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transaction_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shortform: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'tbl_transaction_type',
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

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_authorize_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charger_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    request_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    idtag: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    messageID: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0= Error 1= Success"
    }
  }, {
    sequelize,
    tableName: 'tbl_authorize_details',
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

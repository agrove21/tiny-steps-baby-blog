const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Baby extends Model {}

Baby.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    babyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    babyBirthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "babies",
  }
);

module.exports = Baby;
import { Sequelize, DataTypes } from "sequelize";
import { now } from "sequelize/types/utils";
import { connection } from "../database/database";

const sequelize = new Sequelize();

export const product = connection.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: "now()",
  },
});

product.sync();

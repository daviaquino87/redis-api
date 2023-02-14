import { DataTypes } from "sequelize";
import { connection } from "../database/database";

export const product = connection.define("products", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

product.sync();

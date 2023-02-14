import { Sequelize } from "sequelize";

const db_database = String(process.env.DB_DATABASE);
const db_user = String(process.env.DB_USER);
const db_pass = String(process.env.DB_PASS);
const db_host = String(process.env.DB_HOST);

export const connection = new Sequelize(db_database, db_user, db_pass, {
  host: db_host,
  dialect: "postgres",
});

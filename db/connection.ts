import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("node", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false
});

export default sequelize;
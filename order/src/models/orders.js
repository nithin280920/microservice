const Sequelize = require("sequelize");
const sequelize = require("../../config/dbConnection");
const tableName = "orders";
const Orders = sequelize.define(
  "Orders",
  {
    orderId: {
      type: Sequelize.STRING,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
    },
    orderName: {
      type: Sequelize.STRING,
    },
    userId: {
        type: Sequelize.STRING,
    },
  },
  { tableName, updatedAt: false, createdAt: false }
);

module.exports = Orders;

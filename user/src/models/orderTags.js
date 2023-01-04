const Sequelize = require("sequelize");
const sequelize = require("../../config/dbConnection");
const tableName = "orderTags";
const OrderTags = sequelize.define(
  "OrderTags",
  {
    orderTagsId: {
      type: Sequelize.STRING,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
    },
    orderId: {
      type: Sequelize.STRING,
    },
    tagId: {
      type: Sequelize.STRING,
    },
  },
  { tableName, updatedAt: false, createdAt: false }
);

module.exports = OrderTags;

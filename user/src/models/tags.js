const Sequelize = require("sequelize");
const sequelize = require("../../config/dbConnection");
const tableName = "tags";
const Tags = sequelize.define(
  "Tags",
  {
    tagId: {
      type: Sequelize.STRING,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
    },
    tagName: {
      type: Sequelize.STRING,
    },
  },
  { tableName, updatedAt: false, createdAt: false }
);

module.exports = Tags;

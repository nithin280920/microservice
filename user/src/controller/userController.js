const User = require("./../models/user");
const Orders = require("./../models/orders");
const Tags = require("./../models/tags");
const OrderTags = require("./../models/orderTags");
const { Op } = require("sequelize");

// posting user data
const userData = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    return res.status(200).send({ user, Message: "Logged in successfully" });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};
//get all user data
const userAllData = async (req, res) => {
  try {
    const user = await User.findAll();
    return res
      .status(200)
      .send({ user, Message: "Users data fetched successfully" });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};
// updating user data
const updateUserData = async (req, res) => {
  const obj = req.body;
  try {
    const user = await User.update(obj, {
      where: {
        id: { [Op.eq]: obj.userId },
      },
    });
    return res
      .status(200)
      .send({ user, Message: "user data updated successfully" });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};
// deleting user data
const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.body.userId,
      },
    });
    return res
      .status(200)
      .send({ user: req.body.userId, Message: "user removed successfully" });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};

//{ associations }

//hasOne
const oneToOne = async (req, res) => {
  User.hasOne(Orders, { foreignKey: "userId" });
  try {
    const one = await User.findAll({
      include: Orders,
      where: { userId: req.body.userId },
    });
    return res.status(200).send({ Data: one, Message: "hasOne" });
  } catch (error) {
    return res.status(500).send({ Message: error.message });
  }
};
// belongsTo
const belongsTo = async (req, res) => {
  Orders.belongsTo(User, { foreignKey: "userId" });
  try {
    const one = await Orders.findAll({
      include: User,
      where: { userId: req.body.userId },
    });
    return res.status(200).send({ Data: one, Message: "belongs" });
  } catch (error) {
    return res.status(500).send({ Message: error.message });
  }
};
//one to many
const oneToMany = async (req, res) => {
  User.hasMany(Orders, { foreignKey: "userId" });
  try {
    const one = await User.findAll({
      include: Orders,
      where: { userId: req.body.userId },
    });
    return res.status(200).send({ Data: one, Message: "oneToMany" });
  } catch (error) {
    return res.status(500).send({ Message: error.message });
  }
};
//many to many
const manyToMany = async (req, res) => {
  Orders.belongToMany(Tags, { through: "OrderTags" });
  Tags.belongToMany(Orders, { through: "OrderTags" });
  try {
    const one = await Orders.findAll({
      include: [
        {
          module: Tags,
        },
      ],
    });
    return res.status(200).send({ Data: one, Message: "manyToMany" });
  } catch (error) {
    return res.status(500).send({ Message: error.message });
  }
};

module.exports = {
  userData,
  userAllData,
  updateUserData,
  deleteUser,
  oneToOne,
  belongsTo,
  oneToMany,
  manyToMany,
};

const User = require("./../model/user");
const { Op } = require("sequelize");

// posting user data
const userData = async (req,res) =>{
    const {firstName, lastName, email} = req.body;
        try {
            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email
            })
                return res.status(200).send({ user, Message: "Logged in successfully" });
          } catch (error) {
            return res.status(500).send({ Message: error });
          }
}
// updating user data
const updateUserData = async (req,res) =>{
    const obj = req.body;
        try {
            const user = await User.update(obj, {
                where: {
                  id: { [Op.eq]: obj.userId },
                },
              })
                return res.status(200).send({ user, Message: "user data updated successfully" });
          } catch (error) {
            return res.status(500).send({ Message: error });
          }
}
// deleting user data
const deleteUser = async (req,res) =>{
        try {
            const user = await User.destroy({
                where: {
                  id: req.body.userId
                }
              })
                return res.status(200).send({ user: req.body.userId , Message: "user removed successfully" });
          } catch (error) {
            return res.status(500).send({ Message: error });
          }
}
module.exports ={
    userData,
    updateUserData,
    deleteUser
}
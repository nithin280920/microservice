const Orders = require("./../models/orders");

// posting orders data
const orders = async (req,res) =>{
    const { orderName, userId} = req.body;
        try {
            const user = await Orders.create({
                orderName: orderName,
                userId: userId
            })
                return res.status(200).send({ user, Message: "Orders added successfully" });
          } catch (error) {
            return res.status(500).send({ Message: error });
          }
}
module.exports ={
    orders
}
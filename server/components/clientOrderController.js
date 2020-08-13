const Order = require("../models/order");

const clientOrderController = (req, res) => {
  const {form, userType, userId } = req.body;

  const order = new Order({
    items: form,
    userType,
    userId
  });

  order.save( (err, saved) => {
    if(err) {
      console.error(err);
    } else {
      console.log('order saved to orders db, userId: ' + saved.userId);
    }
  });

  console.log('clientController done: ' + JSON.stringify(req.body.clientOrders));
};

module.exports = clientOrderController;
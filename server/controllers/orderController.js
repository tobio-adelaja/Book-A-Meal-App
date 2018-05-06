import db from '../models/index';

const Order = db.Orders;

const radix = 10;

class OrderController {
  // Display all available meals
  getAllOrders(req, res) {
    return Order
    .findAll()
    .then(function(orders) {
      res.status(200).json({
        orders
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  addSingleOrder(req, res) {
    return Order
    .create({
      date: req.body.date,
      mealId: req.body.mealId,
      quantity: req.body.quantity,
      userId: req.body.userId
    })
    .then(function(order) {
       res.status(201).json({
        order,
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  // Update an existing meal
  editSingleOrder(req, res) {
    return Order
    .findById(req.params.id)
    .then(function(order) {
      if (!order) {
        return res.status(404).send({ message: 'Order not found.' })
      }

      return order
      .update({
        date: req.body.name,
        mealId: req.body.mealId,
        quantity: req.body.quantity,
        userId: req.body.userId
      })
      .then(res.status(201)).send({message: 'Success'})
    })
    .catch(function(error) {
      return res.status(401).send(error);
    })
  }
}

const orderController = new OrderController();

export default orderController;

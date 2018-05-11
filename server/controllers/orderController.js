import db from '../models/index';

const Order = db.Orders;
const OrderMeal = db.OrderMeals;

class OrderController {
  // Display all orders
  static getAllOrders(req, res) {
    return Order
      .findAll({
        include: [{ all: true }],
      })
      .then((orders) => {
        if (orders.length === 0) {
          return res.status(404).json({ message: 'No orders available' });
        }
        return res.status(200).json({ orders });
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }

  // Add a single order
  static addSingleOrder(req, res) {
    const requestDate = new Date();
    return Order
      .create({
        date: requestDate,
        userId: req.body.userId,
        deliveryAddress: req.body.deliveryAddress,
      })
      .then((order) => {
        const mealCount = req.body.meals.length;
        for (let counter = 0; counter < mealCount; counter += 1) {
          OrderMeal
            .create({
              orderId: order.dataValues.id,
              mealId: req.body.meals[counter],
            })
            .then((orderMeal) => {
              if (!orderMeal) {
                res.status(400).json({ message: 'An error occured while processing request.' });
              }
            });
        }
        res.status(200).send({
          message: 'Order added successfully.',
          order,
        });
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }

  // Update an existing meal
  static editSingleOrder(req, res) {
    return Order
      .findById(req.params.id)
      .then((order) => {
        if (!order) {
          return res.status(404).send({ message: 'Order not found.' });
        }

        return order
          .update({
            deliveryAddress: req.body.deliveryAddress,
          })
          .then(() => {
            OrderMeal
              .findAll({ where: { orderId: req.params.id } })
              .then((orderMeals) => {
                const mealCount = req.body.meals.length;
                for (let counter = 0; counter < mealCount; counter += 1) {
                  orderMeals[counter]
                    .update({
                      mealId: req.body.meals[counter],
                    })
                    .then((orderMeal) => {
                      if (!orderMeal) {
                        res.status(400).json({ message: 'An error occured while processing request.' });
                      }
                    });
                }
                res.status(200).send({
                  message: 'Order updated successfully.',
                  order,
                });
              });
          });
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }
}

export default OrderController;

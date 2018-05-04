import orders from '../models/orderModel';

const radix = 10;

class Order {
  // Display all orders
  getOrder(req, res) {
    return res.status(200).json({
      orders,
    });
  }

  // Add a new order
  postOrder(req, res) {
    const order = {
      id: orders.length + 1,
      meal: req.body.meal,
      quantity: req.body.quantity,
    };
    orders.push(order);
    return res.status(201).json({ success: 'Order added successfully', status: 201 });
  }

  // Update an existing order
  putOrder(req, res) {
    const changedID = req.params.id;
    const order = orders.find(c => c.id === parseInt(changedID, radix));
    if (!order) {
      res.status(404).send('The meal with the given ID was not found.');
    } else {
      for (let i = 0; i < orders.length; i += 1) {
        if (orders[i].id === parseInt(changedID, radix)) {
          orders[i].meal = req.body.meal;
          orders[i].quantity = req.body.quantity;
        }
      }
    }
    return res.status(200).json({ success: 'Order updated successfully', status: 200 });
  }
}

const orderController = new Order();

export default orderController;

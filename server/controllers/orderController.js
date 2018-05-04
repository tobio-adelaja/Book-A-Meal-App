import orders from '../models/orderModel';

const radix = 10;

class OrderController {
  // Display all orders
  getAllOrders(req, res) {
    return res.status(200).json({
      orders,
    });
  }

  // Add a new order
  postSingleOrder(req, res) {
    const order = {
      id: orders.length + 1,
      meal: req.body.meal,
      quantity: req.body.quantity,
    };
    orders.push(order);
    return res.status(201).json({ success: 'Order added successfully', status: 201 });
  }

  // Update an existing order
  editSingleOrder(req, res) {
    let requestId = req.params.id;
    const requestIndex = orders.findIndex(singleOrder => singleOrder.id === parseInt(requestId, radix));
    if (requestIndex === -1) {
      res.status(404).send('The meal with the given ID was not found.');
    } else {
      orders[requestIndex].meal = req.body.meal;
      orders[requestIndex].quantity = req.body.quantity;
    }
    return res.status(200).json({ success: 'Order updated successfully', status: 200 });
  }
}

const orderController = new OrderController();

export default orderController;

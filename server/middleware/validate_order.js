class OrderValidator {
  static addSingleOrder(req, res, next) {
    const { userId, deliveryAddress, meals } = req.body;

    if (typeof (userId) !== 'undefined') {
      if (isNaN(userId)) {
        return res.status(400).send({ message: 'User ID must be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'User ID is a required field.' });
    }

    if (typeof (deliveryAddress) !== 'undefined') {
      if (isNaN(deliveryAddress)) {
        // console.log(/\d/.test(name));
        if (deliveryAddress.trim() === '' || deliveryAddress === 'null') {
          return res.status(400).send({ message: 'Address is a required field.' });
        }
      } else {
        return res.status(400).send({ message: 'Address cannot be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'Address is a required field.' });
    }

    if (typeof (meals) !== 'undefined') {
      // console.log(/\d/.test(name));
      if (meals.length === 0) {
        return res.status(400).send({ message: 'Meal list cannot be empty.' });
      }
    } else {
      return res.status(400).send({ message: 'A list of meals must be specified for menu.' });
    }

    // return res.status(200).send({ message: 'Passed.' });
    return next();
    // return req.body.name;
  }

  static editSingleOrder(req, res, next) {
    const { id } = req.params;

    if (isNaN(id) || /[/."*$#@!^+=_?,'()]/.test(id)) {
      return res.status(400).send({ message: 'Meal ID must be an integer.' });
    }
    next();
    // return res.status(200).send({ message: 'Passed.' });
  }
}

export default OrderValidator;

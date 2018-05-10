class MealValidator {
  static addSingleMeal(req, res, next) {
    const { name, price, userId } = req.body;

    if (typeof (name) !== 'undefined') {
      if (isNaN(name)) {
        // console.log(/\d/.test(name));
        if (name.trim() === '' || name === 'null') {
          return res.status(400).send({ message: 'Meal name is a required field.' });
        }
        if (/\d/.test(name)) {
          return res.status(400).send({ message: 'Meal name cannot contain a number.' });
        }
        if (/[/."*$#@!^+=_?,'()]/.test(name)) {
          return res.status(400).send({ message: 'Meal name cannot contain special characters.' });
        }
      } else {
        return res.status(400).send({ message: 'Meal name cannot be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'Meal name is a required field.' });
    }

    if (typeof (price) !== 'undefined') {
      if (isNaN(price)) {
        return res.status(400).send({ message: 'Price must be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'Price is a required field..' });
    }

    if (typeof (userId) !== 'undefined') {
      if (isNaN(userId)) {
        return res.status(400).send({ message: 'User ID must be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'User ID is a required field.' });
    }

    //return res.status(200).send({ message: 'Passed.' });
    next();
    // return req.body.name;
  }

  static editDeleteSingleMeal(req, res, next) {
    const { id } = req.params;

    if (isNaN(id) || /[/."*$#@!^+=_?,'()]/.test(id)) {
      return res.status(400).send({ message: 'Meal ID must be an integer.' });
    }
    next();
    // return res.status(200).send({ message: 'Passed.' });
  }
}

export default MealValidator;

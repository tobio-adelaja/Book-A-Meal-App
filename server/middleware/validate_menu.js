class MenuValidator {
  static setMenu(req, res, next) {
    const { meals } = req.body;

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
}

export default MenuValidator;

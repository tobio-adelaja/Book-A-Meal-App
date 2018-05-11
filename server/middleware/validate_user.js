class UserValidator {
  static signup(req, res, next) {
    const {
      fullName, email, password, admin,
    } = req.body;

    if (typeof (fullName) !== 'undefined') {
      if (isNaN(fullName)) {
        // console.log(/\d/.test(name));
        if (fullName.trim() === '' || fullName === 'null') {
          return res.status(400).send({ message: 'Full name is a required field.' });
        }
        if (/\d/.test(fullName)) {
          return res.status(400).send({ message: 'Full name cannot contain a number.' });
        }
        if (/[/."*$#@!^+=_?,'()]/.test(fullName)) {
          return res.status(400).send({ message: 'Full name cannot contain special characters.' });
        }
      } else {
        return res.status(400).send({ message: 'Full name cannot be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'Full name is a required field.' });
    }

    if (typeof (email) !== 'undefined') {
      if (isNaN(email)) {
        // console.log(/\d/.test(name));
        if (email.trim() === '' || email === 'null') {
          return res.status(400).send({ message: 'Email is a required field.' });
        }
        if (email.indexOf('@') === -1) {
          return res.status(400).send({ message: 'Not a valid email. Missing @ sign.' });
        }
      } else {
        return res.status(400).send({ message: 'Email cannot be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'Email is a required field.' });
    }

    if (typeof (password) !== 'undefined') {
      // console.log(/\d/.test(name));
      if (password.trim() === '' || password === 'null') {
        return res.status(400).send({ message: 'Password is a required field.' });
      }
      if (password.length < 8) {
        return res.status(400).send({ message: 'Password must have at least 8 characters.' });
      }
      if (password.indexOf(' ') !== -1) {
        return res.status(400).send({ message: 'Password cannot have whitespaces.' });
      }
    } else {
      return res.status(400).send({ message: 'Password is a required field.' });
    }

    if (typeof (admin) !== 'undefined') {
      // console.log(/\d/.test(name));
      if (admin != true && admin != false) {
        return res.status(400).send({ message: 'Admin can only be true or false' });
      }
    } else {
      return res.status(400).send({ message: 'Must select user type of Admin or Customer.' });
    }

    next();
  }

  static signin(req, res, next) {
    const {
      email, password,
    } = req.body;

    if (typeof (email) !== 'undefined') {
      if (isNaN(email)) {
        // console.log(/\d/.test(name));
        if (email.trim() === '' || email === 'null') {
          return res.status(400).send({ message: 'Email is a required field.' });
        }
        if (email.indexOf('@') === -1) {
          return res.status(400).send({ message: 'Not a valid email. Missing @ sign.' });
        }
      } else {
        return res.status(400).send({ message: 'Email cannot be a number.' });
      }
    } else {
      return res.status(400).send({ message: 'Email is a required field.' });
    }

    if (typeof (password) !== 'undefined') {
      // console.log(/\d/.test(name));
      if (password.trim() === '' || password === 'null') {
        return res.status(400).send({ message: 'Password is a required field.' });
      }
      if (password.length < 8) {
        return res.status(400).send({ message: 'Password must have at least 8 characters.' });
      }
      if (password.indexOf(' ') !== -1) {
        return res.status(400).send({ message: 'Password cannot have whitespaces.' });
      }
    } else {
      return res.status(400).send({ message: 'Password is a required field.' });
    }

    next();
  }
}

export default UserValidator;

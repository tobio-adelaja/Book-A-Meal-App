import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import db from '../models/index';

import config from '../config/config.json';

const User = db.Users;

class UserController {
  // Display all available meals
  static getAllUsers(req, res) {
    return User
      .findAll()
      .then((users) => {
        res.status(200).json({
          users,
        });
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }

  static addSingleUser(req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          return res.status(400).json({ message: 'User already exists. Use another email address.' });
        }
        return User
          .create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            handle: req.body.handle,
            role: req.body.role,
          })
          .then((newUser) => {
            const payload = {
              newUser,
            };

            const token = jwt.sign(payload, config.secretKey, {
              expiresIn: 86400,
            });

            res.status(201).json({
              success: true,
              message: 'New user created. Token sent successfully.',
              newUser,
              Token: token,
            });
          })
          .catch(error => res.status(400).json({ message: error }));
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }

  static authenticate(req, res) {
    return User
      .findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          res.status(401).json({ success: false, message: 'User authentication failed. User not found.' });
        } else if (user) {
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.status(401).json({ success: false, message: 'User authentication failed. Wrong password.' });
          } else {
            const payload = {
              user,
            };

            const token = jwt.sign(payload, config.secretKey, {
              expiresIn: 86400,
            });

            res.json({
              success: true,
              message: 'User authentication successful. Token sent successfully',
              Token: token,
            });
          }
        }
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }

  // Update an existing meal
  static editSingleUser(req, res) {
    return User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: 'User not found.' });
        }

        return user
          .update({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            handle: req.body.handle,
            role: req.body.role,
          })
          .then(res.status(201).send({ message: 'User modified successfully.' }));
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }

  // Delete an existing meal
  static deleteSingleUser(req, res) {
    return User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: 'User not found.' });
        }
        return user
          .destroy()
          .then(res.status(202)).send({ message: 'User deleted successfully.' });
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }
}

export default UserController;

import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import db from '../models/index';

import config from '../config/config.json';

const User = db.Users;

const createToken = (payload) => {
  const newToken = jwt.sign(payload, config.secretKey, {
    expiresIn: 86400,
  });

  return newToken;
};

class UserController {
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
            admin: req.body.admin,
          })
          .then((newUser) => {
            const payload = {
              newUser,
            };

            const token = createToken(payload);

            res.status(201).json({
              success: true,
              message: 'New user created. Token sent successfully.',
              newUser,
              Token: token,
            });
          })
          .catch(error => res.status(400).json({ message: error.message }));
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }

  static authenticate(req, res) {
    return User
      .findOne({ where: { email: req.body.email } })
      .then((newUser) => {
        if (!newUser) {
          res.status(401).json({ success: false, message: 'User authentication failed. User not found.' });
        } else if (newUser) {
          if (!bcrypt.compareSync(req.body.password, newUser.password)) {
            res.status(401).json({ success: false, message: 'User authentication failed. Wrong password.' });
          } else {
            const payload = {
              newUser,
            };

            const token = createToken(payload);

            res.status(200).json({
              success: true,
              message: 'User authentication successful. Token sent successfully',
              newUser,
              Token: token,
            });
          }
        }
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }
}

export default UserController;

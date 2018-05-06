import db from '../models/index';

import jwt from 'jsonwebtoken';

import config from '../config/config.json';

const User = db.Users;

const radix = 10;

class UserController {
  // Display all available meals
  getAllUsers(req, res) {
    return User
    .findAll()
    .then(function(users) {
      res.status(200).json({
        users
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  addSingleUser(req, res) {
    return User
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName,
      admin: req.body.admin
    })
    .then(function(user) {
      const payload = {
        user
      }          

      const token = jwt.sign(payload, config.secretKey, {
        expiresIn: 86400
      });

      res.status(201).json({
        user,
        success: true,
        message: 'Token sent successfully',
        token: token
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  authenticate(req, res) {
    return User
    .findOne({where: {email: req.body.email} })
    .then(function(user) {
      if (!user) {
        console.log(req.body.email);
        console.log(req.body.password);
        res.status(404).json({ success: false, message: 'Authentication failed. User not found.'});
      } else if (user) {
        if (user.password != req.body.password) {
          console.log(user.email);
          console.log(user.password);
          res.status(404).json({ success: false, message: 'Authentication failed. Wrong password.'});
        } else {

          const payload = {
            user
          }          

          const token = jwt.sign(payload, config.secretKey, {
            expiresIn: 86400
          });

          //console.log(payload); /*

          res.json({
            success: true,
            message: 'Token sent successfully',
            token: token
          });
        }
      }
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  // Update an existing meal
  editSingleUser(req, res) {
    return User
    .findById(req.params.id)
    .then(function(user) {
      if (!user) {
        return res.status(404).send({ message: 'User not found.' })
      }

      return user
      .update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
      })
      .then(res.status(201)).send({message: 'Success'})
    })
    .catch(function(error) {
      return res.status(401).send(error);
    })
  }

  // Delete an existing meal
  deleteSingleUser(req, res) {
    return User
    .findById(req.params.id)
    .then(function(user) {
      if (!user) {
        return res.status(404).send({ message: 'User not found.' })
      }

      return user
      .destroy()
      .then(res.status(202)).send({message: 'User delete successfully'})
    })
    .catch(function(error) {
      return res.status(400).send(error);
    })
  }
}

const userController = new UserController();

export default userController;

import jwt from 'jsonwebtoken';

import config from '../config/config.json';

const check = {
  authenticate: (req, res, next) => {
    const token = req.query.token || req.body.token || req.headers.token;
    if (!token) {
      res.status(403).send({
        message: 'No token provided.',
      });
    } else {
      jwt.verify(token, config.secretKey, (error, decoded) => {
        if (error) {
          return res.status(403).send({
            success: 'false',
            message: 'Failed to authenticate token',
          });
        }
        req.decoded = decoded;
        next();
        return decoded;
      });
    }
  },
  authorize: (req, res, next) => {
    // const token = req.query.token || req.body.token || req.headers.token;
    if (req.decoded && req.decoded.user.role === 'Caterer') {
      return next();
    }
    // console.log(req.decoded.user.admin);
    return res.status(401).send({ message: 'You are not authorized to view this page.' });
  },
};

export default check;

import Joi from 'joi';

import Validate from 'express-validation';

const validateSignIn = Validate({
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

const validateCreateMeal = Validate({
  body: {
    name: Joi.string().required(),
    price: Joi.number().required(),
  },
});

const validateEditDeleteMeal = Validate({
  params: {
    id: Joi.number().required(),
  },
});

const validateCreateUser = Validate({
  body: {
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    handle: Joi.string().required(),
    role: Joi.string().required(),
  },
});

const validateEditDeleteUser = Validate({
  params: {
    id: Joi.number().required(),
  },
});

const validateCreateOrder = Validate({
  body: {
    date: Joi.string().required(),
    userId: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    expiresAt: Joi.string().required(),
  },
});

const validateEditDeleteOrder = Validate({
  params: {
    id: Joi.number().required(),
  },
});

const validateSetMenu = Validate({
  body: {
    date: Joi.string().required(),
    userId: Joi.number().required(),
    meals: Joi.array().required(),
  },
});

export default {
  validateCreateMeal,
  validateEditDeleteMeal,
  validateCreateUser,
  validateEditDeleteUser,
  validateCreateOrder,
  validateEditDeleteOrder,
  validateSetMenu,
  validateSignIn,
};

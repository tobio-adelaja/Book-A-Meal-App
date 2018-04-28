import express from 'express';

import orderController from '../controllers/orderController';

const router = express.Router();

// GET request for order
router.get('/', orderController.getOrder);

// POST request for order
router.post('/', orderController.postOrder);

// PUT request for order
router.put('/:id', orderController.putOrder);

export default router;

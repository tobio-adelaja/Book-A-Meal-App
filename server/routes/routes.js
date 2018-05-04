import express from 'express';

import orderController from '../controllers/orderController';

const router = express.Router();

// GET request for order
router.get('/orders', orderController.getAllOrders);

// POST request for order
router.post('/orders', orderController.postSingleOrder);

// PUT request for order
router.put('/orders/:id', orderController.editSingleOrder);

export default router;

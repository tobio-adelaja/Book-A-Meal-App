import express from 'express';

import menuController from '../controllers/menuController';

const router = express.Router();

// GET request for menu
router.get('/', menuController.getMenu);

// POST request for menu
router.post('/', menuController.postMenu);

export default router;

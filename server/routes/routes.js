    import express from 'express';

import menuController from '../controllers/menuController';

const router = express.Router();

// GET request for menu
router.get('/menu', menuController.getDailyMenu);

// POST request for menu
router.post('/menu', menuController.setDailyMenu);

export default router;

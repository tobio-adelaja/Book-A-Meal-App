import express from 'express';

const router = express.Router();

router.get('', (req, res) => { return res.send('Welcome to the Book-A-Meal app!'); });

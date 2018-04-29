import express from 'express';

import bodyParser from 'body-parser';

import order from './routes/order';

import meals from './routes/meals';

import menu from './routes/menu';

const app = express();
app.use(express.json());
app.use(bodyParser.text());
app.use('/api/v1/meals', meals);
app.use('/api/v1/menu', menu);
app.use('/api/v1/orders', order);

const port = process.env.PORT || 3000;
app.listen(port);

export default app;

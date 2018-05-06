import express from 'express';

import bodyParser from 'body-parser';

import morgan from 'morgan';

import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(morgan('dev'));
app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port);

export default app;

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(bodyParser.text());
app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port);

export default app;

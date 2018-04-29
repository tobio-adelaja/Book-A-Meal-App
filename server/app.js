import express from 'express';
import bodyParser from 'body-parser';
import meals from './routes/meals';

const app = express();
app.use(express.json());
app.use(bodyParser.text());
app.use('/api/v1/meals', meals);

const port = process.env.PORT || 3000;
app.listen(port);

export default app;

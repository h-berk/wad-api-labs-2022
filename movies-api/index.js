import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
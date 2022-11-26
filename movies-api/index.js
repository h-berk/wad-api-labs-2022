import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies/index.js';
import genresRouter from './api/genres/index.js';
import './db/index.js';
import './seedData/index.js';
import usersRouter from './api/users/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
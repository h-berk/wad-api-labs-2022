import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies/index.js';
import './db/index.js';
import './seedData/index.js';
import usersRouter from './api/users/index.js';
import genresRouter from './api/genres/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

app.use(express.json());
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
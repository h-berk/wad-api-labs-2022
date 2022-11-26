import express from 'express';
import Genre from './genreModel.js';

const router = express.Router(); // eslint-disable-line

// Get all genres
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

export default router;
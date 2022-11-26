import express from 'express';
import { genres } from './genresData.js';

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genres);
});

// Get genre
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (genres.id == id) {
        res.status(200).json(genres);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;
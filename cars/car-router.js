const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve cars' })
        })
})

router.get('/:id', (req, res) => {
    db('cars')
        .where({ id: req.params.id })
        .first()
        .then(car => {
            if (car) {
                res.json(car)
            }
            else {
                res.error(404).json({ message: `No car found under ${req.params.id}` })
            }
        })
        .catch(error => {
            res.status(500).json({ message: `Could not retieve car at ${req.params.id}` })
        })
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars')
        .insert(carData, 'id')
        .then(([id]) => {
            db('cars')
                .where({ id })
                .then(carEntry => {
                    res.status(201).json(carEntry);
                });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to store data" });
        });
})

module.exports = router;
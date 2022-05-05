const express = require('express'); 
const router = express.Router(); 
const Collection = require('../models/collection.js'); 

// Index
router.get('/', (req, res) => {
    Collection.find({}, (error, allCollections) => {
        error ? res.status(404).json(error) : res.status(200).json(allCollections);
    });
});

// New - this route covered via React front end

// Delete 
router.delete('/:id', (req, res) => {
    Collection.findByIdAndDelete(req.params.id, (error, collection) => {
        error ? res.status(404).json(error) : res.status(200).json(collection);
    });
});

// Update
router.put('/:id', (req, res) => {
    Collection.findByIdAndUpdate(req.params.id, req.body, {
        new: true }, (error, updatedCollection) => {
            error ? res.status(404).json(error) : res.status(200).json(updatedCollection);
    });
});

// Create
router.post('/', (req, res) => {
    console.log(req.body);
    Collection.create(req.body, (error, createdCollection) => {
        error ? res.status(404).json(error) :
        res.status(200).json(createdCollection)
    });
});

// Edit - this route covered via React front end

// Show
router.get('/:id', (req, res) => {
    Collection.findById(req.params.id, (error, foundCollection) => {
        error ? res.status(404).json(error) : res.status(200).json(foundCollection);
    });
});

module.exports = router; 
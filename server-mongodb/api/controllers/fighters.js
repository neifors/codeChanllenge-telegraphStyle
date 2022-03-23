const express = require('express');
const router = express.Router();

const Fighter = require('../models/fighter')

// fighters index route
router.get('/', async (req, res) => {
    try {
        const fighters = await Fighter.all
        res.json({fighters})
    } catch(err) {
        res.status(500).json({err})
    }
})

// fighters show route
router.get('/:id', async (req, res) => {
    try {
        const f = await Fighter.findById(req.params.id)
        res.json(f)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create dog route
router.post('/', async (req, res) => {
    try {
        const f = await Fighter.create(req.body.name, req.body.age, req.body.country, req.body.fights,req.body.wins)
        res.json(f)
    } catch(err) {
        res.status(404).json({err})
    }
})

// dogs update route
/*router.patch('/:id', async (req, res) => {
    try {
        const dog = await Dog.findById(req.params.id)
        const updatedDog = await dog.update()
        res.json({dog: updatedDog})
    } catch(err) {
        res.status(500).json({err})
    }
})

// delete dog route
router.delete('/:id', async (req, res) => {
    try {
        const dog = await Dog.findById(req.params.id)
        await dog.destroy()
        res.status(204).json('Dog deleted')
    } catch(err) {
        res.status(500).json({err})
    }
})*/


module.exports = router;

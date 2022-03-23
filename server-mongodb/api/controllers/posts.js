const express = require('express');
const router = express.Router();

const Post = require('../models/post')

// dogs index route
router.get('/', async (req, res) => {
    try {
        const p = await Post.all
        res.json({p})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports= router;

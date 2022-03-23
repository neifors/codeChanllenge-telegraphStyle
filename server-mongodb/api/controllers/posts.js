const express = require('express');
const router = express.Router();

const Post = require('../models/post')

// posts index route
router.get('/', async (req, res) => {
    try {
        const p = await Post.all
        res.json({p})
    } catch(err) {
        res.status(500).json({err})
    }
})
router.post('/', async (req, res)=>{
    try{
        const p=await Post.create(req.body.title,req.body.pseudonym,req.body.body)
        res.json({p})
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports= router;

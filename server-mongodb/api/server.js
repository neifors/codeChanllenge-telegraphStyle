const express = require('express');
const cors = require('cors');
const path=require('path')

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes=require('./controllers/posts.js')

//server.use("/client", express.static(path.resolve(__dirname, "client")));
server.use('/posts', postRoutes)


server.get('/', (req, res) => {
    res.json('Hello World')
});
console.log(__dirname)
module.exports = server

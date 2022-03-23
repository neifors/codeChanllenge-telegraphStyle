const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const dogRoutes = require('./controllers/dogs')
const fightRoutes=require('./controllers/fighters')
server.use('/dogs', dogRoutes)
server.use('/fighters',fightRoutes)


// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server

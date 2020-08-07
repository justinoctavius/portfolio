const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
const path = require('path');
const { PORT } = require('./config');
const app = express();
dotenv.config();
//middleware
app.use(express.json());
app.use('/', routes);
//static
app.use('/',express.static(path.join(__dirname, '..', 'build')))
app.use('/about',express.static(path.join(__dirname, '..', 'build')))
app.use('/projects',express.static(path.join(__dirname, '..', 'build')))
app.use('/contact',express.static(path.join(__dirname, '..', 'build')))


//server
app.listen(PORT, () => console.log('server running on port ' + PORT));
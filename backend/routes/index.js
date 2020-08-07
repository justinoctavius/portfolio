const express = require('express');
const route = express.Router();
const { projectsCtrl} = require('../controllers');

//projects
route.get('/api/projects', projectsCtrl.get);


module.exports = route;
const express = require('express');
const Router = express.Router();

//controller file is require here to get controller pages
const homeController = require('../controllers/home_controller');

console.log('Router is on ');


// get home controller
Router.get('/', homeController.home);

//get practise page controller
Router.get('/practise', homeController.practise);


//export the router to main index.js
module.exports = Router;
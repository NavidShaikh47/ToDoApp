const express = require('express');
const Router = express.Router();

//controller file is require here to get controller pages
const homeController = require('../controllers/home_controller');

console.log('Router is on ');


// get home controller
Router.get('/', homeController.home);

// for /practise route , it will point to route file from here and then go to practise_route.js and perform further operation
Router.get('/practise', require('./practise_route'));

//for /user route
Router.get('/user', require('./User_route'));




//export the router to main index.js
module.exports = Router;
const express = require('express');
const router = express.Router();



const practiseController = require('../controllers/practise_controller');
router.get('/practise', practiseController.practise);

console.log('im practise route');






module.exports = router;
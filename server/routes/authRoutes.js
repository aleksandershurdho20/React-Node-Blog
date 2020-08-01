const express  = require('express');
const authController = require('../controllers/authController')
const route = express.Router();
route.route('/signup').post(authController.signup)

module.exports = route;
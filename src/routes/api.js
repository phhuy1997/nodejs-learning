// This file is used for Restful API's endpoint
const express = require('express');
const { getAllUsers } = require('../controllers/apiController');
const router = express.Router()


// Declare Our API Endpoint:
router.get('/getAllUsers', getAllUsers); // Respective to this route, call to Controller: getHomePage



module.exports = router



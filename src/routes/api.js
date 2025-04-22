// This file is used for Restful API's endpoint
import { Router } from 'express';
import { getAllUsers, getAllEvents, getAllCharities } from '../controllers/apiController.js';
const router = Router()


// Declare Our API Endpoint:
router.get('/getAllUsers', getAllUsers); // Respective to this route, call to Controller: getHomePage
router.get('/events', getAllEvents); // Respective to this route, call to Controller: getHomePage
router.get('/charities', getAllCharities); // Respective to this route, call to Controller: getHomePage


router.post('/api/auth/salesforce')



export default router



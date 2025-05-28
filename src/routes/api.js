// This file is used for Restful API's endpoint
import { Router } from 'express';
import { getAllUsers, getAllEvents, getAllCharities, addEvent, updateEvent, addCharity, updateCharity } from '../controllers/apiController.js';
const router = Router()


// Declare Our API Endpoint:
router.get('/getAllUsers', getAllUsers); // Respective to this route, call to Controller: getHomePage

router.get('/events', getAllEvents); // Respective to this route, call to Controller: getHomePage
router.post('/event', addEvent);
// router.get('/event/:id', getEventById); // Respective to this route, call to Controller: getHomePage
router.put('/event/:id', updateEvent);

router.get('/charities', getAllCharities); // Respective to this route, call to Controller: getHomePage


router.post('/charity', addCharity);
router.put('/charity/:id', updateCharity);
// router.post('/api/auth/salesforce')



export default router



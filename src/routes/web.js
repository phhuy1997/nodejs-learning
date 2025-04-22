// This file is used for server-site rendering
import { Router } from 'express'
import { getHomePage, getABC, getHtmlRender, getViewRender, postCreateUser } from '../controllers/homeController.js';

const router = Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)



// Declare Our Routes:
router.get('/', getHomePage); // Respective to this route, call to Controller: getHomePage

router.get('/:abc', getABC); // Respective to this route, call to Controller: getABC

router.get('/htmlRender', getHtmlRender); // Respective to this route, call to Controller: getHtmlRender

router.get('/viewRender', getViewRender); // Respective to this route, call to Controller: getViewRender

router.post('/create-user', postCreateUser);


export default router



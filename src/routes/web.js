// This file is used for server-site rendering
const express = require('express')
const { getHomePage, getABC, getHtmlRender, getViewRender, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

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


module.exports = router



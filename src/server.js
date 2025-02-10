require('dotenv').config()
const express = require('express'); // this is commonJs import method
// import express from 'express'; // this is ES module import method

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');



const app = express(); // create an Express App
const PORT = process.env.PORT; // read PORT from .env
const hostname=process.env.HOST_NAME; // read HOST_NAME from .env



// Declare this middleware to convert request json data to Object --> help BE easily read request.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Declare this middleware to check logic (like Authenticate) --> If pass, can go to the main Route below
app.use((req, res, next) => {
  if (req.method === 'GET') {
    console.log('This is GET Method');
    next(); // --> accept to continue to below
  } else {
    console.log('This is POST Method');
    next(); // --> accept to continue to below
  }
})



// declare router for Express App
app.use('/', webRoutes); // '/' is prefix of the route
app.use('/api/v1/', apiRoutes); // '/' is prefix of the API endpoint


// Config this middleware to redirect user to notFoundPage.ejs if all routes above was not meet
app.use((req, res) => {
  return res.render('./notFoundPage.ejs')
})


// config template (view) engine, static files --> see in moved to /config/viewEngine.js
configViewEngine(app);



// App can run on that port 3000 of hostname declare above
app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

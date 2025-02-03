require('dotenv').config()
const express = require('express'); // this is commonJs import method
// import express from 'express'; // this is ES module import method

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');



const app = express(); // create an Express App
const PORT = process.env.PORT; // read PORT from .env
const hostname=process.env.HOST_NAME; // read HOST_NAME from .env




// declare router for Express App
app.use('/', webRoutes); // '/' is prefix of the route





// config template (view) engine, static files --> see in moved to /config/viewEngine.js
configViewEngine(app);



// App can run on that port 3000 of hostname declare above
app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

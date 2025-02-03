require('dotenv').config()
const express = require('express'); // this is commonJs import method
// import express from 'express'; // this is ES module import method
const path = require('path');



const app = express(); // create an Express App
const PORT = process.env.PORT; // read PORT from .env
const hostname=process.env.HOST_NAME; // read HOST_NAME from .env




// declare router for Express App
app.get('/', (req, res) => {
  res.send('Hello, World!'); // send response to client
});
app.get('/abc', (req, res) => {
  res.send('Hello, ABC!'); // send response to client
});
app.get('/htmlRender', (req, res) => {
  res.send('<h1>Hello, ABC!<h1>'); // send response to client
});



// config template engine (view engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/viewRender', (req, res) => {
  res.render('sample.ejs'); //reponse the html file sample.ejs to client
});


// config static files
app.use(express.static(path.join(__dirname, 'public'))) //declare so that express will know that we storage static files in /public folder



// App can run on that port 3000 of hostname declare above
app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

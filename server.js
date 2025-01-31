const express = require('express'); // this is commonJs import method
// import express from 'express'; // this is ES module import method

const app = express(); // create an Express App
const PORT = 3000;


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


// App can run on that port 3000 above
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

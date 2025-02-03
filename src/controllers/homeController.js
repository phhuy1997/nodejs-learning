const connection = require("../config/database");

const getHomePage = (req, res) => {
	// TO DO: procress data, call Model, ...
	res.send('Hello, World!');// --> return response to client
}

const getABC = (req, res) => {
	// TO DO: procress data, call Model, ...
	let users = [];
	connection.query(
		'SELECT * FROM Users',
		function (err, results, fields) {
			results.forEach((result) => users.push(result.name));
			console.log('users :>> ', users);
			res.send(`Hello, ${users.join(" and ")}!`); // --> return response to client
  }
)
	 
}

const getHtmlRender = (req, res) => {
	// TO DO: procress data, call Model, ...
	res.send('<h1>Hello, ABC!<h1>'); // --> return response to client
}

const getViewRender = (req, res) => {
	// TO DO: procress data, call Model, ...
	res.render('./sample.ejs'); //reponse the html file sample.ejs to client
}


module.exports = {
	getHomePage,
	getABC,
	getHtmlRender,
	getViewRender,
}

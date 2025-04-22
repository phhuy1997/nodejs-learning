import connection from "../config/database.js";

export const getHomePage = (req, res) => {
	// TO DO: procress data, call Model, ...
	res.send('Hello, World!');// --> return response to client
}

export const getABC = (req, res) => {
	// TO DO: procress data, call Model, ...
	let users = [];
// 	connection.query(
// 		'SELECT * FROM Users WHERE `name` = ?', [req.params.abc],
// 		function (err, results, fields) {
// 			results.forEach((result) => users.push(`${result.name} (${result.email})`));
// 			console.log('users :>> ', users);
// 			res.send(`Hello, ${users.join(" and ")}!`); // --> return response to client
//   }
// )
	 
}

export const getHtmlRender = (req, res) => {
	// TO DO: procress data, call Model, ...
	res.send('<h1>Hello, ABC!<h1>'); // --> return response to client
}

export const getViewRender = (req, res) => {
	// TO DO: procress data, call Model, ...
	res.render('./sample.ejs'); //reponse the html file sample.ejs to client
}

export const postCreateUser = (req, res) => {
	// TO DO: procress data, call Model, ...
	console.log("Request Body: ", req.body);
	// let email = req.body.email; // let name = req.body.name; // let city = req.body.city;
	let {email, name, city} = req.body;
	connection.query(
		`INSERT INTO Users (email, name, city) VALUES (?,?,?)`, [email, name, city],
		function (err, results) {
			console.log(results); // 
			res.send('Created User Successfully');
		}

	)

}

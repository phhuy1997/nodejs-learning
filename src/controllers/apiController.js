const connection = require("../config/database");

const getAllUsers = (req, res) => {
	// TO DO: procress data, call Model, ...
	connection.query(
		'SELECT * FROM Users',
		function (err, results, fields) {
			return res.status(200).json({
				message: 'ok',
				data: results
			})
  	}
	) 
}


module.exports = {
	getAllUsers,
}

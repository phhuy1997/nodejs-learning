import { createPool } from 'mysql2';

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const connection = createPool({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '123456',
  database: 'hoidanit',

	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

export default connection;

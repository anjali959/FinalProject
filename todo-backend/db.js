const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'W3_87387_Anjali',
  password: 'manager',
  database: 'todo_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db;

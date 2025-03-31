const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'your-rds-endpoint',
    user: 'admin',
    password: 'MyPassword123',
    database: 'mydatabase'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to RDS successfully!");
});

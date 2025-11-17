// db.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',      // Localhost for Docker mapped port
  user: 'myuser',          // Your MySQL user
  password: 'localpass',  // Your MySQL password
  database: 'mealflowdb',        // Your database
  port: 3306               // Default MySQL port
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL successfully!');
  connection.release(); // Release connection back to pool
});

// Example query
pool.query('SELECT NOW() AS currentTime', (err, results) => {
  if (err) {
    console.error('Query error:', err);
    return;
  }
  console.log('Current time from MySQL:', results[0].currentTime);
  pool.end(); // Close pool
});

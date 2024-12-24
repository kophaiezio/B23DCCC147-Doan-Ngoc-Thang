const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Kết nối database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kophaiezio',
  database: 'csdlf1',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Middleware   // Next.js frontend URL
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type',],
}));
app.use(express.json());

// API endpoints
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.status(400).send('Invalid credentials');
    }
  });
});


app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  const checkUserSql = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(checkUserSql, [username, email], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Server error');
    }

    if (result.length > 0) {
      return res.status(400).send('Username or email already exists');
    }

    const insertUserSql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(insertUserSql, [username, email, password], (err) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Server error');
      }

      res.send('User registered');
    });
  });
});



// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//This was a test using mysql

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'login'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )`;
    db.query(createTableQuery, (err) => {
        if (err) throw err;
        console.log('Users table created');

        const insertUserQuery = `
            INSERT INTO users (username, password) VALUES
            ('Jorge', 'Jorge')`;
        db.query(insertUserQuery, (err) => {
            if (err) throw err;
            console.log('User inserted');
        });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            // Display 'Login successful' in green
            messageElement.textContent = 'Login successful';
            messageElement.style.color = 'rgb(63, 185, 80)';
            res.json({ message: 'Login successful' });
        } else {
            // Display 'Login failed' in red
            messageElement.textContent = 'Login failed';
            messageElement.style.color = 'red';
            res.status(401).json({ message: 'Login failed' });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

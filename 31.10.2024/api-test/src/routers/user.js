const express = require('express');
const router = express.Router();
const db = require('../configs/database');

// Lấy tất cả các công việc (GET)
router.get('/', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});



// Tạo mới một công việc (POST)
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    db.query('INSERT INTO user (title, description, due_date) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, name, email, password });
    });
});

// Cập nhật công việc theo ID (PUT)
router.put('/:id', (req, res) => {
    const { name, email, passwor } = req.body;
    const { id } = req.params;
    db.query('UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?', 
    [title, description, due_date, completed, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Todo updated successfully' });
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM user WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Todo deleted successfully' });
    });
});

module.exports = router;

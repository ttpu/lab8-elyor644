// Create web server
const express = require('express');
const app = express();
app.use(express.json());
const { comments } = require('./data.js');

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find((comment) => comment.id === id);
    res.json(comment);
});

// Create new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find((comment) => comment.id === id);
    comment.body = req.body.body;
    res.json(comment);
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex((comment) => comment.id === id);
    comments.splice(index, 1);
    res.status(204).send();
});

// Start server
app.listen(4001, () => {
    console.log('Server started at http://localhost:4001');
});
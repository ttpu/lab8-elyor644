// Create web server
const express = require('express');
const app = express();

// Middleware для обработки JSON и URL-кодированных данных
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Set up the route
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Маршрут для обработки POST-запросов на /comments
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    res.send(`Comment received: ${comment}`);
});
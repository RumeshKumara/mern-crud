console.log('Server is running on port 3000');
//QWoJY8jvda8XdRcP

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use("/", (req, res, next) => {
    res.send('Hello World');
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:QWoJY8jvda8XdRcP@cluster0.cnovdvb.mongodb.net/")
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use("/img", express.static(__dirname + '/img'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/drink', (req, res) => {
    res.sendFile(path.join(__dirname + '/drink.html'))
});

app.get('/food-count', (req, res) => {
    fs.readdir('img/food', (error, files) => {
        res.status(200).json({ count: files.length })
    });
});

app.get('/drink-count', (req, res) => {
    fs.readdir('img/drink', (error, files) => {
        res.status(200).json({ count: files.length })
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});
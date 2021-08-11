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
    res.sendFile(path.join(__dirname + '/img/drinkmenu.pdf'))
});

app.get('/delivery', (req, res) => {
    res.sendFile(path.join(__dirname + '/delivery.html'))
});

app.get('/food-count', (req, res) => {
    fs.readdir('img/food', (error, files) => {
        res.status(200).json({ count: files.length })
    });
});

app.get('/hardyswine-count', (req, res) => {
    fs.readdir('img/hardyswine', (error, files) => {
        res.status(200).json({ count: files.length })
    });
});

app.get('/drink-count', (req, res) => {
    fs.readdir('img/drink', (error, files) => {
        res.status(200).json({ count: files.length })
    });
});

app.get('/delivery-count', (req, res) => {
    fs.readdir('img/delivery', (error, files) => {
        res.status(200).json({ count: files.length })
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});
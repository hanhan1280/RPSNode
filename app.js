var http = require('http');
var express = require('express');
var app = express();

app.use(express.json());

const turns = []

app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/rps', (req, res) => {
    res.send(turns);
})

app.post('/rps', (req, res) => {
    const player = {
        id: (turns.length%2==0)?1:2,
        key: req.body.rpsValue
    };
    turns.push(player);
    res.send(player);
})

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log('Server started.');
})
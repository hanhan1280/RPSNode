var http = require('http');
var express = require('express');
var app = express();

const response = [
    { id: 0, key: "Rock" },
    { id: 1, key: "Paper" },
    { id: 2, key: "Scissor" }
]

app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/rps', (req, res) => {
    res.send(response);
})

app.get('/rps/:id', (req, res) => {
    // 
    let rpsValue = response.find(c => c.id === parseInt(req.params.id));
    if (!rpsValue) {
        res.status(404).send('No value was found');
    }
    res.send(rpsValue);    
})

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log('Server started.');
})
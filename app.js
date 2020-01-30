var http = require('http');
var express = require('express');
var app = express();

app.use(express.json());

const rpsVals = ["ROCK","PAPER","SCISSOR"];

app.get('/', (req, res) => {
    res.send("hello");
})

app.post('/rps', (req, res) => {
    var index = getIndexOf(req.body.rpsValue.toUpperCase());
    const winScenario = {
        winCase: (index++>=rpsVals.length)?rpsVals[0]:rpsVals[index++]
    }
    res.send(winScenario);
})

function getIndexOf(a){
    for (let index = 0; index < rpsVals.length; index++) {
        if(rpsVals[index] == a){
            return index;
        }        
    } 
}

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log('Server started.');
})
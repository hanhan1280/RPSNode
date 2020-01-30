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
    const response = winLose();
    res.send(response);
})

function winLose(){
    var winOne = false;
    if(turns.length < 2){
        return;
    }
    var player1 = turns.find(c=>c.id === 1);
    var player2 = turns.find(c=>c.id === 2);
    removeItems(turns,2);
    if(player1.key == "Rock" && player2.key == "Scissor") winOne = true;    
    else if(player1.key == "Scissor" && player2.key == "Paper") winOne = true;    
    else if(player1.key == "Paper" && player2.key == "Rock") winOne = true;    
    else if(player1.key == player2.key) return "noone wins";
    
    if(winOne){
        return "Player 1 wins with " + player1.key;
    }
    return "Player 2 wins with " + player2.key;
}

function removeItems(arr, item) {
    for ( var i = 0; i < item; i++ ) {
        arr.pop();
    }
}

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log('Server started.');
})
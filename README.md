RPSNode
===================

RPSNode is a basic REST API using node.js, for posting rock, paper, or scissor requests to a simple server. 

### HOME ###
*GET:* `/` 

*DESCRIPTION:* This endpoint is to test if one can connect to the API successfully.

### Rock Paper Scissor ###
*POST:* `/rps`

*DESCRIPTION:* This endpoint is to only request a hand sign for rock, paper, or scissors and to determine the winning hand sign for the given combination

*SAMPLE REQUEST*

```
{
    "rpsValue": "Paper"
}
```

*SAMPLE RESPONSE*
```
{
    "winCase": "SCISSOR"
}
```

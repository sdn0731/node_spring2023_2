// Establish Requirements
var express = require('express');
var app = express();
var axios = require('axios').default;

app.use('/static', express.static("public"));
app.set("view engine", "ejs");

// Create "Random Comic Generator" Method
app.get('/', function(req, res){
    let comicData = {}
    // Generate Random Number (1-2682)
    var num = Math.floor(Math.random() * (2682 + 1));
    // Use Random Number to Generate Random Comic
    axios.get('https://xkcd.com/' + num + '/info.0.json').then(function(response){
        comicData = response.data
        res.render('todo.ejs', {comicData: comicData});
    })
})

// Identify Port (3000 was unavailable)
app.listen(3001, function(){
    console.log('App listening on port 3001')
})
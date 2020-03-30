var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path');

var game = require('./services/gameService')
var user = require('./services/userService')

var app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080
mongoose.connect('mongodb+srv://gokhan:4791181gs@kelimeoyunu-ujxwd.mongodb.net/kelime_oyunu?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    try {
      console.log('Connected to Db')
    }catch(error){
      console.log(error);           
    }
})

app.use('/game',game.router)
app.use('/user',user.router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port);
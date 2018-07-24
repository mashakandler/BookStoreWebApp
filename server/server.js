require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Book} = require('./models/book');
var {User} =  require('./models/user');
var {Review} = require('./models/review');

var {authenticate} =  require('./middleware/authenticate');
var serveStatic = require('serve-static');

const routes = require('./routes');

//define express App
var app = express();
const port = process.env.PORT;
app.use(bodyParser.json());


//Server Angular JS
app.use(serveStatic('client', {'index': ['index.html', 'index.htm']}))

//Define Routes 
app.use('/', routes);


//start listen
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
  
});

module.exports = {app};

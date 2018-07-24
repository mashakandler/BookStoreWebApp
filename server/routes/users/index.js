const userRouter = require('express').Router();
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./../../db/mongoose');
var {Book} = require('./../../models/book');
var {User} =  require('./../../models/user');
var {Review} = require('./../../models/review');
var {authenticate} =  require('./../../middleware/authenticate');


// POST /users
userRouter.post('/', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
  
    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });
  
  userRouter.get('/me', authenticate, (req, res) => {
    res.send(req.user);
  });
  
  userRouter.post('/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
  
    User.findByCredentials(body.email, body.password).then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      });
    }).catch((e) => {
      res.status(400).send();
    });
  });


module.exports = userRouter;
const routes = require('express').Router();
const users = require('./users');
const books = require('./books');

routes.use('/books', books);
routes.use('/users', users);


routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
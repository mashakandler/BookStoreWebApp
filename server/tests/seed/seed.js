const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Book} = require('./../../models/book');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'admin@example.com',
  password: 'password1!',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'user@example.com',
  password: 'password2!'
}];

const books = [{
    _id: new ObjectID(),
    name: 'Adventures of Huckleberry Finn',
    description: 'Commonly named among the Great American Novels, the work is among the first in major American literature to be written throughout in vernacular English.',
    genreId : 'CLASSIC',
    imageUrl :'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/800px-Huckleberry_Finn_book.JPG'  
}, {
  _id: new ObjectID(),
  name: 'A Song of Ice and Fire',
  description: 'A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin',
  genreId : 'SCI-FI',
  imageUrl :'https://cf1.s3.souqcdn.com/item/2016/04/04/10/48/70/67/item_XL_10487067_13601541.jpg'  
}];

const populateBooks = (done) => {
 Book.remove({}).then(() => {
    return Book.insertMany(books);
  }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    
    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {books , populateBooks, users, populateUsers};

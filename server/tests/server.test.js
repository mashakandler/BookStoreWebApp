const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Book} = require('./../models/book');
const {User} = require('./../models/user');

const {books, populateBooks, users, populateUsers} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateBooks);



describe('GET /books', () => {
    it('should get all books', (done) => {
      request(app)
        .get('/books')
        .expect(200)
        .expect((res) => {
          expect(res.body.books.length).toBe(2);
        })
        .end(done);
    });
  });
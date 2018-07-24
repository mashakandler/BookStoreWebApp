var mongoose = require('mongoose');
var booksSchema = new mongoose.Schema({
    name: String,
    description: String,
    genereId: String,
    imageUrl:String
});

var Book = mongoose.model('Book', booksSchema);
module.exports = {Book};


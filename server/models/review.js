var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
    bookId: String,
    review: String
   
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = {Review};

require('./../config/config')
var jackrabbit = require('jackrabbit');

var rabbit = jackrabbit(process.env.RABBIT_URL);
var exchange = rabbit.default();
var hello = exchange.queue({ name: "task_queue", durable: true });

var sendReview = function(data) {
    exchange.publish(data, { key: "task_queue" });
    console.log("publish review Message successfuly");

};


module.exports = {sendReview}

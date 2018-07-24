require('./../config/config')
var jackrabbit = require('jackrabbit');

var rabbit = jackrabbit(process.env.RABBIT_URL);
var exchange = rabbit.default();
var hello = exchange.queue({ name: "task_queue", durable: true });

exchange.publish({ name: "Hunter" ,data:"good",review:"bad",ts:Date.now()}, { key: "task_queue" });
exchange.on("drain", process.exit);

console.log("publish message successfuly");
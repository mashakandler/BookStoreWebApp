require('./../config/config')
var jackrabbit = require('jackrabbit');

var rabbit = jackrabbit(process.env.RABBIT_URL);
var exchange = rabbit.default();
var hello = exchange.queue({ name: "task_queue", durable: true });
exchange.on("drain", process.exit);

const timeoutScheduled = Date.now();

hello.consume(onGreet,{timeout:200});
/*setInterval(() => {
    const delay = Date.now() - timeoutScheduled;
    
    //console.log(`${delay}ms have passed since I was scheduled`);
  }, 1000);
*/

function onGreet(data, ack) {
  console.log("Hello, " + data.name + "!" + " ts:" + data.ts);
  ack();
}

console.log("Done !")
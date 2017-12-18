var config = require('config');

console.log(config.get("rabbitmq.Host"));

var user="admin";
var pwd="123";

//----------------  AMQP ---------------------
/*
var q = 'q1';

var q1 = 'q1';

var user="admin";
var pwd="123";

var message = {"rabitmq": {
    Host: 'localhost',
    Port: 5672,
    Login: 'pamidu',
    Password: 'pamidu',
    ConnectionTimeout: 10000,
    AuthMechanism: 'AMQPLAIN',
    Vhost: '/',
    NoDelay: true,
    ssl: {
        enabled : false
    }
}
}

var open = require('amqplib').connect('amqp://'+user+':'+pwd+'@localhost');

// Publisher
open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q1).then(function(ok) {
        return ch.sendToQueue(q1, new Buffer(JSON.stringify(message)));
    });
}).catch(console.warn);

console.log("111");

// Consumer
open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
        return ch.consume(q, function(msg) {
            if (msg !== null) {
                console.log(msg.content.toString());
                ch.ack(msg);
            }
        });
    });
}).catch(console.warn);

console.log("222");

open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q1).then(function(ok) {
        return ch.sendToQueue(q1, new Buffer(JSON.stringify(message)));
    });
}).catch(console.warn);

open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q1).then(function(ok) {
        return ch.sendToQueue(q1, new Buffer(JSON.stringify(message)));
    });
}).catch(console.warn);

open.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q1).then(function(ok) {
        return ch.sendToQueue(q1, new Buffer(JSON.stringify(message)));
    });
}).catch(console.warn);
*/


//----------------  MQTT ---------------------

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://'+user+':'+pwd+'@localhost');
client.subscribe('presence');
client.publish('presence', 'Hello mqtt');


var client2  = mqtt.connect('mqtt://'+user+':'+pwd+'@localhost');
client2.subscribe('1111');
client2.publish('1111', 'Hello mqtt');

client2.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    //client.end()
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    //client.end()
})

for (var x=0; x<500; x++) {
    client.publish('presence', '1111');
}



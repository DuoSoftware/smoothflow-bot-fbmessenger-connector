'use strict';
const webhookSvc = require('./src/webhook.js');
const pubsub = require('./src/pubsub.js');

webhookSvc.InitWebHook(); //init webhook endpoints

let restConsumer = new pubsub.RESTPublisherSubscriber();
restConsumer.Subscribe(); //init inbount REST consumer

let queueConsumer = new pubsub.AMQPPublisherSubscriber();
queueConsumer.Subscribe("inbound"); //init inbound queue consumer
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()), // creates express http server
    config = require('config'),
    dateTime = require('date-and-time');

let now = new Date();

class PublisherSubscriber {
    constructor() {

    }

    Publish() {
        //push data
    }

    Subscribe() {
        //consume data
    }
}

class RESTPublisherSubscriber extends PublisherSubscriber {
    constructor() {
        super();
    }

    Publish() {
        //push data to queue
    }

    Subscribe() {
        //open endpoint to retrieve callbacks from dispatcher
        app.listen(config.pubsub.Port, () => console.log('Starting REST-PublisherSubscriber Consumer via Port : ' + config.pubsub.Port));

        app.post('/internal/consumer/facebook', (req, res) => {
            let body = req.body;
            console.log(`-------------- Consumed Event : ${dateTime.format(now, 'YYYY/MM/DD HH:mm:ss')} --------------`);
            console.log(body); // Pass this to facebook messenger API via promise
            res.status(200).send(JSON.stringify({"Status":true, "Message":"Event Consumed."}));
        });
    }
}

class AMQPPublisherSubscriber extends PublisherSubscriber {
    constructor(queuename) {
        super();
        this.host = config.rabbitmq.host;
        this.port = config.rabbitmqport;
        this.login = config.rabbitmqlogin;
        this.pwd = config.rabbitmqpwd;
        this.conTimeout = config.rabbitmqconTimeout;
        this.authMechanism = config.rabbitmqauthMechanism;
        this.queuename = "queuename";
        this.channel = null;
    }

    Publish() {
        //push data to queue
    }

    Subscribe() {
        //initiate link to sub from queue.
    }

}

module.exports.RESTPublisherSubscriber = RESTPublisherSubscriber;
module.exports.AMQPPublisherSubscriber = AMQPPublisherSubscriber;
'use strict';
let config = require('config');
let dateTime = require('date-and-time');

// Imports dependencies and set up http server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

let now = new Date();

let InitWebHook = () => {

    app.listen(config.fbconnect.Port, () => console.log('Starting Facebook Messenger Connector via Port : ' + config.fbconnect.Port));

// Creates the endpoint for our webhook
    app.post('/v1/webhook/facebook/:botid', (req, res) => {
        let body = req.body;
        let botId = req.params.botid;

        // Checks this is an event from a page subscription
        if (body.object === 'page') {
            console.log(`-------------- New Event : ${dateTime.format(now, 'YYYY/MM/DD HH:mm:ss')} via BotID : ${botId} --------------`);
            // Iterates over each entry - there may be multiple if batched
            body.entry.forEach(function (entry) {
                // Gets the message. entry.messaging is an array, but
                // will only ever contain one message, so we get index 0
                let webhookEvent = entry.messaging[0];
                console.log(webhookEvent);
            });

            // Returns a '200 OK' response to all requests
            res.status(200).send('EVENT_RECEIVED');
        } else {
            console.log("New refused non page event : " + dateTime.format(now, 'YYYY/MM/DD HH:mm:ss'));
            // Returns a '404 Not Found' if event is not from a page subscription
            res.sendStatus(404);
        }

    });

// Adds support for GET requests to our webhook
    app.get('/v1/webhook/facebook/:botid', (req, res) => {
        console.log("Initializing verify process for FB Messenger webhook.")
        // Your verify token. Should be a random string.
        let VERIFY_TOKEN = "112233";
        let botId = req.params.botid

        // Parse the query params
        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];

        console.log(`Challenging with BotId : ${botId} VerifyToken : ${token}  Challenge : ${challenge}`);

        // Checks if a token and mode is in the query string of the request
        if (mode && token) {
            // Checks the mode and token sent is correct
            if (mode === 'subscribe' && token === VERIFY_TOKEN) {
                // Responds with the challenge token from the request
                console.log('WEBHOOK_VERIFIED');
                res.status(200).send(challenge);
            } else {
                // Responds with '403 Forbidden' if verify tokens do not match
                res.sendStatus(403);
            }
        }
    });

}

module.exports.InitWebHook = InitWebHook;
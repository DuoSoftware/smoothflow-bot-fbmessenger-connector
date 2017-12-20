module.exports = {
    "rabbitmq": {
        "Host": 'SYS_RABBITMQ_HOST',
        "Port": 'SYS_RABBITMQ_PORT',
        "Login": 'SYS_RABBITMQ_USER',
        "Password": 'SYS_RABBITMQ_PASSWORD',
        "ConnectionTimeout": '10000',
        "AuthMechanism": 'AMQPLAIN',
        "Vhost": '/',
        "NoDelay": 'true',
        "ssl": {
            "enabled" : 'false'
        }
    },
    "fbconnect":{
        "Port":"FB_CONNECT_PORT"
    },
    "pubsub":{
        "Port":"SYS_PUBSUB_PORT"
    },
};

//NODE_CONFIG_DIR

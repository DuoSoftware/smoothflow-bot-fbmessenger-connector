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
};

//NODE_CONFIG_DIR

module.exports = {
    "rabbitmq": {
        "Host": 'localhost',
        "Port": '5672',
        "Login": 'admin',
        "Password": '123',
        "ConnectionTimeout": '10000',
        "AuthMechanism": 'AMQPLAIN',
        "Vhost": '/',
        "NoDelay": 'true',
        "ssl": {
            "enabled" : 'false'
        }
    },
};

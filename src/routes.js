const userHandler = require('./reg-logControler');

const routes = [
    {
        method: 'POST',
        path: '/register',
        handler: userHandler.register, 
    },
    {
        method: 'POST',
        path: '/login',
        handler: userHandler.login,
    },
];

module.exports = routes;
const message = require('../components/message/routes');

const routes = (server) => {
	server.use('/message', message);
}

module.exports = routes;
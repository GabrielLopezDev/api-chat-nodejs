const store = require('./store');

const addMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error('[messageController] No hay usuario o mensaje');
			return reject('Los datos son incorrectos');
		}

		const fullMessage = {
			user: user,
			message: message,
			date: new Date(),
		}

		store.add(fullMessage);
		resolve(fullMessage);
	});
}

const getMessages = (user, message) => {
	return new Promise((resolve, reject) => {
		resolve(store.list());
	});
}

const updateMessage = (id, message) => {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			return reject('Invalid data');
		}

		const result = await store.updateText(id, message);
		return resolve(result);
	});
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
}
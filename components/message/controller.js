const store = require('./store');

const addMessage = (chat, user, message) => {
	return new Promise((resolve, reject) => {
		if (!chat || !user || !message) {
			console.error('[messageController] No hay usuario o mensaje');
			return reject('Los datos son incorrectos');
		}

		const fullMessage = {
			chat: chat,
			user: user,
			message: message,
			date: new Date(),
		}

		store.add(fullMessage);
		resolve(fullMessage);
	});
}

const getMessages = (filterChat) => {
	return new Promise((resolve, reject) => {
		resolve(store.list(filterChat));
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

const deleteMessage = (id) => {
	if (!id) {
		return reject('Id invalido');
	}

	return new Promise((resolve, reject) => {

		store.remove(id)
			.then(() => {
				resolve();
			})
			.catch(e => {
				reject(e);
			});
	});
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage,
}
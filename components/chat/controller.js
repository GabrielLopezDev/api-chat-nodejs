const store = require('./store');

const addChat = (users) => {
	return new Promise((resolve, reject) => {
		if (!users || !Array.isArray(users)) {
			reject('Invalid user list');
		}

		const chat = {
			users: users,
		}

		store.add(chat);
		resolve(chat);
	});
}

const getChats = (userId) => {
	return store.list(userId);
}

module.exports = {
	addChat,
	getChats,
}
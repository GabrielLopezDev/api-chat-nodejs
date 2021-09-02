const Model = require('./model');

const addMessage = (message) => {
	const newMessage = new Model(message);
	newMessage.save();
}

const getMessages = async (filterChat) => {
	return new Promise((resolve, reject) => {
		let filter = {};
		if (filterChat != null) {
			filter = {chat: filterChat};
		}

		Model.find(filter)
			.populate('user')
			.exec((error, populated) => {
				if (error) {
					reject(error);
					return false;
				}
				resolve(populated);
			});
	});
}

const updateText = async (id, message) => {
	const foundMessage = await Model.findOne({
		_id: id
	});

	foundMessage.message = message;
	const newMessage = await foundMessage.save();
	return newMessage;
}

const removeMessage = (id) => {
	return Model.deleteOne({
		_id: id
	});
}

module.exports = {
	add: addMessage,
	list: getMessages,
	updateText: updateText,
	remove: removeMessage,
}
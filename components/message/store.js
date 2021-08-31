const db = require('mongoose');

const Model = require('./model');

const uri = 'mongodb://localhost:27017/api-chat';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

db.connect(uri, options).then(
	() => { console.log('[db] Conectada con éxito') },
	err => { console.log('[db] ERROR: No se pudo conectar...', err) }
);

const addMessage = (message) => {
	const myMessage = new Model(message);
	myMessage.save();
}

const getMessage = async () => {
	const messages = await Model.find();
	return messages;
}


module.exports = {
	add: addMessage,
	list: getMessage,
}
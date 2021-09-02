const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	chat: {
		type: Schema.Types.ObjectId,
		ref: 'Chat',
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	message: {
		type: String,
		required: true,
	},
	file: {
		type: String,
	},
	date: {
		type: Date,
	},
});

const model = mongoose.model('Message', messageSchema);
module.exports = model;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	user: {
		type: String
	},
	message: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
	},
});

const model = mongoose.model('Message', messageSchema);
module.exports = model;
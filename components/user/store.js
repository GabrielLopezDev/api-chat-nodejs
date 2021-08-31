const Model = require('./model');

const addUser = (user) => {
	const newUser = new Model(user);
	return newUser.save();
}

const getUsers = async () => {
	const users = await Model.find();
	return users;
}

module.exports = {
	add: addUser,
	list: getUsers,
}
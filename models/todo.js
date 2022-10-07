module.exports = (sequelize, Sequelize) => {
	const Todo = sequelize.define("todo", {
		Nama  : {
			type: Sequelize.STRING
		},
		Email : {
			type: Sequelize.STRING
		},
		Alamat: {
			type: Sequelize.STRING
		},
		No    : {
			type: Sequelize.STRING
		}
	});

	return Todo;
};
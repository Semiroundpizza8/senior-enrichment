const Sequelize = require("sequelize");
const db = require("../index");

const Student = db.define("Student", {
	name: {
		type: Sequelize.STRING,
		require: true
	},
	email: {
		type: Sequelize.STRING,
		require: true
	}
});

module.exports = Student

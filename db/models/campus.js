const Sequelize = require("sequelize");
const db = require("../index");

const Campus = db.define("Campus", {
	name: {
		type: Sequelize.STRING,
		require: true
	},
	image: {
		type: Sequelize.STRING,
	}
});

module.exports = Campus
"use strict";

const Sequelize = require("sequelize");

// For more information about Sequelize Data Types :
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types



module.exports = {
	name: "baseTable",
	define: {
		id: { // id must always exist
			type: Sequelize.UUID, // Uses uuidv4 by default (default value is recommended)
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4
		},

		first: {
			type: Sequelize.STRING(255),
			allowNull: false,
			unique: true,
			defaultValue: "Default"
		},

		second: {
			type: Sequelize.TEXT,
			allowNull: false
		},

		surname: {
			type: Sequelize.TEXT,
			allowNull: false
		}
	},
	options: {
		timestamps: false
	}
};

import { DataTypes } from 'sequelize';
import { ORM } from '../db/dbconfig.js';

export const Guest = ORM.define('Guest', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	firstname: {
		type: DataTypes.STRING
	},
	lastname: {
		type: DataTypes.STRING
	},
	passport: {
		type: DataTypes.INTEGER
	},
	isvip: {
		type: DataTypes.BOOLEAN
	},
	email: {
		type: DataTypes.STRING
	}
}, {
	freezeTableName: true,
	timestamps: false,
	tableName: 'Guest'
});

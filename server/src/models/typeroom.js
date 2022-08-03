import {DataTypes} from 'sequelize';
import {ORM} from '../db/dbconfig.js';

export const Typeroom = ORM.define('Typeroom', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  capacity: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.FLOAT
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Typeroom'
});

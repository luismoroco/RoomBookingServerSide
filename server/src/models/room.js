import { DataTypes } from 'sequelize';
import { ORM } from '../db/dbconfig.js';

export const Room = ORM.define('Room', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  name: {
    type: DataTypes.INTEGER
  }, 
  idtype: {
    type: DataTypes.INTEGER
  },
  floor: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Room'
});

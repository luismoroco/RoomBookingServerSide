import {DataTypes} from 'sequelize';
import {ORM} from '../db/dbconfig.js';

export const RoomBoooking = ORM.define('RoomBoooking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  idbook: {
    type: DataTypes.INTEGER
  },
  idroom: {
    type: DataTypes.INTEGER
  },
  income: {
    type: DataTypes.DATE
  }, 
  output: {
    type: DataTypes.DATE
  }
}, {
  freezeTableName: true,
  timestamps: false, 
  tableName: 'RoomBoooking'
});

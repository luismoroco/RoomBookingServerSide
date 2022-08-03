import {DataTypes} from 'sequelize';
import {ORM} from '../db/dbconfig.js';

export const Booking = ORM.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idguest: {
    type: DataTypes.INTEGER
  },
  created: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING
  },
  total: {
    type:DataTypes.FLOAT
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Booking'
});

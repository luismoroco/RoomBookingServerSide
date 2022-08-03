import {Sequelize} from 'sequelize';

export const ORM = new Sequelize('testfinal', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

import { Sequelize } from 'sequelize';

const host = process.env.MYSQL_HOST || 'localhost';
const user = process.env.MYSQL_USER || 'root';
const pass = process.env.MYSQL_PASSWORD || 'password';
const database = process.env.MYSQL_DATABASE || 'tuGerente'

export const ORM = new Sequelize('tuGerente', 'root', 'password', {
  host: 'db',
  dialect: 'mysql'
});

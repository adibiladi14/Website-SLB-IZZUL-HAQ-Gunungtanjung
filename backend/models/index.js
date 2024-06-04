import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Material from './material';

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Material = Material;

export default db;

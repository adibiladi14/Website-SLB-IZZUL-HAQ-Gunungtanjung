import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('school_management', 'school_user', 'biladi', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;

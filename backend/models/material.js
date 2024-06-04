// models/material.js
import { DataTypes } from 'sequelize';
import { define } from '../config/database';

const Material = define('Material', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fileUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Material;

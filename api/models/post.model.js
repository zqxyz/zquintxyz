const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const Posts = sequelize.define(
    'posts',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'posts',
        timestamps: false,
    }
);

module.exports = Posts;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

const Example = sequelize.define(
    'Example',
    {
        // Model attributes are defined here
        example: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        example2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        tableName: 'example',
        timestamps: true,
    }
);

module.exports = Example;

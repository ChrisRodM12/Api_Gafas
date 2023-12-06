const { Sequelize } = require('sequelize');
const setUpModels = require('../models/index')

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    password: '012345',
    database: 'gafas',
    dialect: 'postgres'
});

setUpModels( sequelize );

sequelize.sync();

module.exports = sequelize
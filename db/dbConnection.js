/**
 * Created by zhengcaiyun on 2017/10/24.
 */
const Sequelize = require('sequelize');
const node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const env = node_env === 'development' ? 'development': 'online';
const config = require('../db/dbConfig').db[env];
const sequelizeInstance = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

export default sequelizeInstance;
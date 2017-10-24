/**
 * Created by zhengcaiyun on 2017/10/24.
 */
import sequelizeCon from '../db/dbConnection';

const Sequelize = require('sequelize');
export const testUser = sequelizeCon.define('testUser',{
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    userName: {
       type: Sequelize.STRING(100),
    },
    passWord: {
        type: Sequelize.STRING(100),
    }
},{
    timestamps: false,
    freezeTableName: true,
});
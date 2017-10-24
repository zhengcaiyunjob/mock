/**
 * Created by zhengcaiyun on 2017/10/18.
 */
import sequelizeInstance from '../db/dbConnection';
import { testUserHandler } from '../proxy/testUserHandler';
exports.indexHandler = async (ctx, next) => {
    ctx.body = {
        code: 0,
        msg: 'success',
        data: {}
    }
};

exports.stringHandler = async (ctx, next) => {
    if(!sequelizeInstance) {
        throw 'database connection failed';
    }

    let response = {
        code: 1,
        msg: 'failed',
        data: null
    };
    const userFromCustomer = ctx.request.body;

    ctx.body = await testUserHandler.query().then((userFromDbs) => {
        for(let userFromDb of userFromDbs) {
            let user = userFromDb.dataValues;
            if(user.userName === userFromCustomer.userName && user.passWord === userFromCustomer.passWord){
                response = {
                    code: 0,
                    msg: 'success',
                    data: {
                        userName: user.userName,
                        passWord: user.passWord
                    }
                };
                break;
            }
        };
        return response;
    }).catch((e) => {
        console.log("我是异常", e);
        return  response;
    });
    next();
};
exports.stringHandler2 = async(ctx, next) => {
    if(!sequelizeInstance) {
        throw 'database connection failed';
    }

    let response = {
        code: 1,
        msg: 'failed',
        data: null
    };
    const userFromCustomer = ctx.request.body;
    ctx.body = await sequelizeInstance.query('select * from testUser where userName="'+userFromCustomer.userName+'"')
        .spread((userFromDbs) => {
        for(let userFromDb of userFromDbs) {
            if(userFromDb.userName === userFromCustomer.userName && userFromDb.passWord === userFromCustomer.passWord){
                response = {
                    code: 0,
                    msg: 'success',
                    data: {
                        userName: userFromDb.userName,
                        passWord: userFromDb.passWord
                    }
                };
                break;
            }
        };
        return response;
    });
    next();
}
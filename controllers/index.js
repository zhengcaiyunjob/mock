/**
 * Created by zhengcaiyun on 2017/10/18.
 */

exports.indexHandler = async (ctx, next) => {
    ctx.body = {
        code: 0,
        msg: 'success',
        data: {}
    }
};

exports.stringHandler = async (ctx, next) => {
    console.log("ctx.req", ctx);
    ctx.body = {
        code: 0,
        msg: 'success',
        data: {
            username: 'root',
            passwd: 'root'
        }
    }
};
const router = require('koa-router')();
const index = require(../controllers/index);

router.get('/', index.indexHandler);

router.get('/string', index.stringHandler);

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2dddd json'
  }
})

module.exports = router

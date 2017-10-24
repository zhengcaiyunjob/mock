const Router = require('koa-router');
const index = require('../controllers/index');
const router = new Router();
router.get('/api', index.indexHandler);

router.post('/string', index.stringHandler);
router.post('/string2', index.stringHandler2);

router.get('/api', async (ctx, next) => {
  ctx.body = {
    title: 'koa2dddd json'
  }
})

module.exports = router

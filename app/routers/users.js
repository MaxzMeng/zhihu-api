const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const {find, findById, create, update, delete: del} = require('../controllers/users');


router.get('/', (ctx)=>{
    console.log("hahaha");
});
router.post('/', findById);
router.get('/:id', create);
router.put('/:id', update);
router.delete('/:id', del);

module.exports = router;
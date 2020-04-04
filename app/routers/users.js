const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const {find, findById, create, update, delete: del} = require('../controllers/users');


router.get('/', find);
router.post('/', findById);
router.get('/:id', create);
router.put('/:id', update);
router.delete('/:id', del);

module.exports = router;
const jwt = require('koa-jwt');
const Router = require('koa-router');
const router = new Router({prefix: '/topics'});
const {find, findById, create, update, listFollowers, checkTopicExist} = require('../controllers/topics');

const {secret} = require('../config');

const auth = jwt({secret});

router.get('/', find);
router.post('/', auth, create);
router.get('/:id', findById);
router.patch('/:id', auth, checkTopicExist, update);
router.get('/:id/followers', checkTopicExist, listFollowers);

module.exports = router;
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const error = require('koa-json-error');
const app = new Koa();
const routing = require('./routers');

app.use(error({
    postFormat: (e, {stack, ...rest}) => {
        return process.env.NODE_ENV === 'production' ? rest : {stack, ...rest};
    }
}));
app.use(bodyParser());
routing(app);

app.listen(3000);
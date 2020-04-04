const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const app = new Koa();
const routing = require('./routers');

app.use(error({
    postFormat: (e, {stack, ...rest}) => {
        return process.env.NODE_ENV === 'production' ? rest : {stack, ...rest};
    }
}));
app.use(bodyParser());
app.use(parameter(app));
routing(app);

app.listen(3000);
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const app = new Koa();
const routing = require('./routers');
const {connectionStr} = require('./config');

mongoose.connect(connectionStr, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connect db success');
});
mongoose.connection.on('error', console.error);
app.use(error({
    postFormat: (e, {stack, ...rest}) => {
        return process.env.NODE_ENV === 'production' ? rest : {stack, ...rest};
    }
}));
app.use(bodyParser());
app.use(parameter(app));
routing(app);

app.listen(3000);
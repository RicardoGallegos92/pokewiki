const pokisRouter = require('./pokis.router');

function routerApi(app) {
    app.use('/pokis', pokisRouter);
}

module.exports = routerApi;
var Router = require('express').Router();
var companyRoute = require('./routes/companyRoutes');

Router.use('/companies', companyRoute);

module.exports = Router;
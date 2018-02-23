var Router = require('express').Router();
ctrl = require('../controllers/companyController');

Router.get('/get',ctrl.find);
Router.get('/get/:id',ctrl.findOne);
Router.post('/create',ctrl.create);
Router.put('/update/:id',ctrl.update);
Router.delete('/delete/:id',ctrl.delete);


module.exports = Router;

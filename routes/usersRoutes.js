const usersController = require('../controllers/usersController');
const UserController= require('../controllers/usersController');
const User = require('../models/user');

module.exports=(app)=>{
    //traer datos
    app.get('/api/users/getAll',usersController.getAll);
//guardar datos
    app.post('/api/users/create',usersController.register);
    app.post('/api/users/login',usersController.login);
}
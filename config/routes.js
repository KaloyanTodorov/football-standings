const pagesController = require('../controllers/pagesConstroller');
// const router = require('express-handlebars').Router();

module.exports = (app) => {

    app.get('/about', pagesController.about);
    app.get('/not-found', pagesController.notFound);

    app.get('/', pagesController.home);
}